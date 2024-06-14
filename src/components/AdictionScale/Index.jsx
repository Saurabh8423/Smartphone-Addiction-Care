import React, { useState } from "react";
import axios from "axios";

function Index() {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Time: "",
    Symptoms: [],
    Check_Social_Media: "",
    Boring_Studies: "",
    No_Fun: "",
    Skip_Activities: "",
    Forgetful: "",
    Deprive_Sleep: ""
  });

  const [predictedScore, setPredictedScore] = useState(null);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Symptoms: checked
          ? [...prevFormData.Symptoms, value]
          : prevFormData.Symptoms.filter((symptom) => symptom !== value)
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    try {
      console.log("formData: ", formData);
      const formattedFormData = {};
      Object.keys(formData).forEach((key) => {
        formattedFormData[key] = typeof formData[key] === "string" ? formData[key] : formData[key].join(", ");
      });
      const response = await axios.post("/predict", formattedFormData);
      const data = response.data;
      setPredictedScore(data.predicted_score);
    } catch (error) {
      console.error("Error predicting score:", error);
    }
  }

  return (
    <div className="bg-[#000814] w-full h-screen mx-auto flex justify-center">
      <form onSubmit={submitHandler}>
      <br />
        <fieldset>
          <legend className="text-[#F1F2FF] font-[600] text-[18px] leading-[34px]">
            What is your gender:<sup className="text-pink-400">*</sup>
          </legend>
          <div className="space-x-2">
            <input
              type="radio"
              onChange={changeHandler}
              name="Gender"
              value="Male"
              id="male"
              required
              checked={formData.Gender === "Male"}
              className="mt-3"
            />
            <label
              htmlFor="male"
              className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]"
            >
              Male
            </label>

            <input
              type="radio"
              onChange={changeHandler}
              name="Gender"
              value="Female"
              id="Female"
              required
              checked={formData.Gender === "Female"}
            />
            <label
              htmlFor="Female"
              className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]"
            >
              Female
            </label>
          </div>
        </fieldset>
        <br />
        <hr className="border border-[#AFB2BF] " />
        <br />

        <label
          htmlFor="age"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          Tell me your Age:<sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Age"
          id="age"
          value={formData.Age}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select age">Select age...</option>
          <option value="15-18 year">15-18 Year</option>
          <option value="19-22 year">19-22 Year</option>
          <option value="23-25 year">23-25 Year</option>
          <option value="25-above year">25-above Year</option>
        </select>

        <br />
        <br />
        <hr className="border border-[#AFB2BF] " />
        <br />

        <label
          htmlFor="time"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          Tell me your Time:<sup className="text-pink-400">*</sup>{" "}
        </label>
        <select
          name="Time"
          id="time"
          value={formData.Time}
          onChange={changeHandler}
          required
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] 
                          font-[500] rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select time">Select time...</option>
          <option value="0-2 hours">0-2 hours</option>
          <option value="3-4 hours">3-4 hours</option>
          <option value="5-7 hours">5-7 hours</option>
          <option value="8-10 hours">8-10 hours</option>
          <option value="11-13 hours">11-13 hours</option>
          <option value="14 and above hours">14-above hours</option>
        </select>

        <br />
        <br />
        <hr className="border border-[#AFB2BF] " />
        <br />
        <fieldset className="">
          <legend className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]">
            By Symptoms<sup className="text-pink-400">*</sup>
          </legend>
          <div className="flex flex-row space-x-2 space-y-3">
            <input
              type="checkbox"
              id="headAche"
              name="headAche"
              value={formData.HeadAche}
              onChange={changeHandler}
              className="mt-3"
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">HeadAche</label>
            </div>
          </div>

          <div className="flex flex-row space-x-2">
            <input
              type="checkbox"
              id="Eyeproblem"
              name="Eyeproblem"
              value={formData.Eyeproblem}
              onChange={changeHandler}
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">Eye Problem</label>
            </div>
          </div>

          <div className="flex flex-row space-x-2">
            <input
              type="checkbox"
              id="frustation"
              name="frustation"
              value={formData.Frustation}
              onChange={changeHandler}
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">Frustation</label>
            </div>
          </div>

          <div className="flex flex-row space-x-2">
            <input
              type="checkbox"
              id="anxiety"
              name="anxiety"
              value={formData.Anxiety}
              onChange={changeHandler}
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">Anxiety</label>
            </div>
          </div>

          <div className="flex flex-row space-x-2">
            <input
              type="checkbox"
              id="fever"
              name="fever"
              value={formData.Fever}
              onChange={changeHandler}
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">Fever</label>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <input
              type="checkbox"
              id="other"
              name="other"
              value={formData.Other}
              onChange={changeHandler}
            />
            <div className="text-[#AFB2BF] text-[16px] leading-[24px] font-[500]">
              <label htmlFor="checkbox">Other</label>
            </div>
          </div>
        </fieldset>
        <br />

        <label
          htmlFor="Check Social Media"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I find it essential to check social media feeds every 10-15 minutes:
          <sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Check_Social_Media"
          id="Check Social Media"
          value={formData.Check_Social_Media}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select Check Social Media">
            Select Check Social Media...
          </option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>

        <br />
        <br />

        <label
          htmlFor="Boring Studies"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I find my studies boring and feel the pressure:
          <sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Boring_Studies"
          id="Boring Studies"
          value={formData.Boring_Studies}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select Boring Studies">
            Select Boring Studies...
          </option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
        <br />
        <br />

        <label
          htmlFor="No Fun"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I do not get fun, happiness with family, friends and play Physical
          games:<sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="No_Fun"
          id="No Fun"
          value={formData.No_Fun}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select No Fun">Select No Fun...</option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
        <br />
        <br />

        <label
          htmlFor="Skip Activities"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I spend more time on Social Networking Sites and skip eating,
          exercising and studying continuously:
          <sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Skip_Activities"
          id="Skip Activities"
          value={formData.Skip_Activities}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select Skip Activities">
            Select Skip Activities...
          </option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
        <br />
        <br />

        <label
          htmlFor="Forgetful"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I find it difficult to retain what I have learned and forget quickly:
          <sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Forgetful"
          id="Forgetful"
          value={formData.Forgetful}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select Forgetful">Select Forgetful...</option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
        <br />
        <br />

        <label
          htmlFor="Deprive Sleep"
          className="text-[#F1F2FF] font-[600] text-[18px] leading-[30px]"
        >
          I deprive myself of sleep because I want to be long with Social
          Networking Sites:<sup className="text-pink-400">*</sup>{" "}
        </label>
        <br />
        <select
          name="Deprive_Sleep"
          id="Deprive Sleep"
          value={formData.Deprive_Sleep}
          required
          onChange={changeHandler}
          className="w-full bg-[#161D29] text-[#AFB2BF] text-[16px] leading-[24px] font-[500]
                     rounded-[0.5rem] p-[8px] mt-3"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        >
          <option value="Select Deprive Sleep">Select Deprive Sleep...</option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
        <br />
        <br />
        <button
          type="submit"
          className="bg-[#FFD60A] text-[#000814] px-4 py-1 rounded-[8px] 
                  text-[16px] leading-[24px] font-[500] hover:scale-95 transition-all duration-200 mb-8"
        >
          Submit
        </button>
      </form>
      {predictedScore && (
        <div>
          <h2>Predicted Nomophobia Score: {predictedScore}</h2>
        </div>
      )}
    </div>
  );
}

export default Index;
