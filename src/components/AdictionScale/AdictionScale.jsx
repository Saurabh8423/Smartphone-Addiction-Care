import React, { useState } from "react";
import axios from "axios";
import "./AdictionScale.css";

function Index() {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Time: "",
    Symptoms: "",
    Check_Social_Media: "",
    Boring_Studies: "",
    No_Fun: "",
    Skip_Activities: "",
    Forgetful: "",
    Deprive_Sleep: "",
  });

  const [predictedScore, setPredictedScore] = useState(null);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        Symptoms: checked
          ? (prev.Symptoms ? `${prev.Symptoms}, ` : "") + name
          : prev.Symptoms.replace(new RegExp(`${name}, `, "g"), "").replace(
              new RegExp(`${name}$`, "g"),
              ""
            ),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://nomophobia-backend.onrender.com/predict",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      setPredictedScore(data.nomophobia_score);

      setTimeout(() => {
        window.location.href = `/result?predictedScore=${encodeURIComponent(
          data.nomophobia_score
        )}`;
      }, 1000);
    } catch (error) {
      console.error("Error predicting score:", error);
    }
  }

  return (
    <div className="w-full py-2 mb-20 flex justify-center animate-fadeIn">

      {/* Score Popup */}
      {predictedScore !== null && (
        <div className="w-full fixed top-4 left-0 flex justify-center z-50">
          <div className="bg-[#FFD60A] text-black px-6 py-3 rounded-xl font-semibold shadow-lg animate-scorePopup">
            Your nomophobia score: {predictedScore}
          </div>
        </div>
      )}

      <form
        onSubmit={submitHandler}
        className="w-[95%] md:w-[720px] bg-[#0A1128] p-8 rounded-2xl card-glow border border-[#1d2540] space-y-6"
      >
        <h2 className="text-center text-2xl font-bold text-[#FFD60A]">
          Nomophobia Addiction Scale
        </h2>

        {/* Gender */}
        <div className="space-y-4">
          <label className="text-lg font-semibold text-white">
            What is your gender? <sup className="text-pink-400">*</sup>
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="Gender"
                value="Male"
                checked={formData.Gender === "Male"}
                onChange={changeHandler}
                className="focus-glow"
                required
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="Gender"
                value="Female"
                checked={formData.Gender === "Female"}
                onChange={changeHandler}
                className="focus-glow"
                required
              />
              Female
            </label>
          </div>
        </div>

        <hr className="border border-[#2a3357]" />

        {/* Age + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold text-white">Age</label>
            <select
              name="Age"
              value={formData.Age}
              onChange={changeHandler}
              required
              className="animated-input w-full"
            >
              <option value="">Select age...</option>
              <option value="15-17 Years">15-17 Years</option>
              <option value="18-22 Years">18-22 Years</option>
              <option value="23-25 Years">23-25 Years</option>
              <option value="25 and Above">25 and Above</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-white">Time</label>
            <select
              name="Time"
              value={formData.Time}
              onChange={changeHandler}
              required
              className="animated-input w-full"
            >
              <option value="">Select time...</option>
              <option value="0-2 hours">0-2 hours</option>
              <option value="3-4 hours">3-4 hours</option>
              <option value="5-7 hours">5-7 hours</option>
              <option value="8-10 hours">8-10 hours</option>
              <option value="11-13 hours">11-13 hours</option>
              <option value="14 and above">14 and Above</option>
            </select>
          </div>
        </div>

        {/* Symptoms */}
        <div>
          <label className="font-semibold text-white">Symptoms</label>

          <div className="grid grid-cols-2 gap-2 mt-2 text-[#AFB2BF]">
            {["Headache", "Eye Problem", "Frustrated", "Anxiety", "Fever", "Others"].map((s) => (
              <label key={s} className="flex items-center gap-2 animated-input">
                <input
                  type="checkbox"
                  name={s}
                  onChange={changeHandler}
                  className="focus-glow"
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* All Questions */}
        {[
          {
            label:
              "I find it essential to check social media feeds every 10-15 minutes",
            name: "Check_Social_Media",
          },
          { label: "I find my studies boring and feel pressure", name: "Boring_Studies" },
          { label: "I do not get fun with family/friends", name: "No_Fun" },
          { label: "I spend more time on social networking sites", name: "Skip_Activities" },
          { label: "I find it difficult to retain what I have learned", name: "Forgetful" },
          { label: "I deprive myself of sleep", name: "Deprive_Sleep" },
        ].map((item) => (
          <div key={item.name} className="space-y-2">
            <label className="font-semibold text-white">{item.label}</label>

            <select
              name={item.name}
              value={formData[item.name]}
              onChange={changeHandler}
              required
              className="animated-input w-full"
            >
              <option value="">Select...</option>
              <option value="Strongly Agree">Strongly Agree</option>
              <option value="Agree">Agree</option>
              <option value="Neutral">Neutral</option>
              <option value="Disagree">Disagree</option>
              <option value="Strongly Disagree">Strongly Disagree</option>
            </select>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#FFD60A] text-black py-3 rounded-xl font-semibold animated-input"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Index;
