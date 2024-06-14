import json
from flask import Flask, request
from sklearn.svm import SVR
from sklearn.impute import SimpleImputer
from flask_cors import CORS  # Import CORS class

# Load the trained machine learning model
# Replace 'model.pkl' with the actual file name of your trained model
svr_model = SVR(kernel='rbf')
# Load the trained model
# svr_model = load_model('model.pkl')

# Define scoring system and symptom scores
scoring_system = {
    'Age': {'15-17 Years': 5, '18-22 Years': 4, '23-25 Years': 3, '25 and Above': 1},
    'Gender': {'Male': 3, 'Female': 3},
    'Time': {'0-2 hours': 1, '3-4 hours': 2, '5-7 hours': 3, '8-10 hours': 4, '10-13 hours': 5, '14 and above': 6},
    'Check Social Media': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1},
    'Boring Studies': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1},
    'No Fun': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1},
    'Skip Activities': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1},
    'Forgetful': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1},
    'Deprive Sleep': {'Strongly Agree': 3, 'Agree': 2, 'Neutral': 1, 'Disagree': 0, 'Strongly Disagree': -1}
}

# Symptom scores
symptom_scores = {'Headache': 3, 'Eye Problem': 3, 'Fever': 3, 'Frustrated': 3, 'Anxiety': 3, 'Others': 3}

# Function to score symptoms
def score_symptoms(symptoms):
    total_score = 0
    for symptom in symptoms.split(', '):
        total_score += symptom_scores.get(symptom, 0)
    return total_score

# Define the function to predict the nomophobia score
def predict_nomophobia_score(user_input):
    nomophobia_score = (
        scoring_system['Age'][user_input['Age']] +
        scoring_system['Gender'][user_input['Gender']] +
        scoring_system['Time'][user_input['Time']] +
        score_symptoms(user_input['Symptoms']) +
        scoring_system['Check Social Media'][user_input['Check Social Media']] +
        scoring_system['Boring Studies'][user_input['Boring Studies']] +
        scoring_system['No Fun'][user_input['No Fun']] +
        scoring_system['Skip Activities'][user_input['Skip Activities']] +
        scoring_system['Forgetful'][user_input['Forgetful']] +
        scoring_system['Deprive Sleep'][user_input['Deprive Sleep']]
    )
    return nomophobia_score

# Initialize Flask app
app = Flask(__name__)
CORS(app) # Add CORS support to your Flask app

# Define prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from request
    user_input = request.get_json()

    # Predict nomophobia score
    nomophobia_score = predict_nomophobia_score(user_input)

    # Return the predicted nomophobia score as JSON response
    return json.dumps({'nomophobia_score': nomophobia_score})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
