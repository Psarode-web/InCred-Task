import React, { useContext, useState } from "react";
import { AuthContext } from "./auth/authContext";
import { showNextScreen } from "../helpers";
import selectedCheck from "../assets/selectedCheck.png";
import unselectedCheck from "../assets/unselectedCheck.png";
import LoginFooter from "./auth/LoginFooter";

const SurveyQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const { authDispatch, authState } = useContext(AuthContext);
  const { screenStatus ,userData} = authState;

  const options = [
    "Facebook/Instagram",
    "Friend",
    "Google",
    "LinkedIn",
    "YouTube",
    "News Articles/TV",
  ];

  /**This function will show selected option */
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSubmitDisabled(false);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      handleNextScreen();
    } else {
      console.error("Please select an option before submitting.");
    }
  };

  /**This function will show new ui */
  const handleNextScreen = () => {
    authDispatch({
      type: "updateScreen",
      payload: showNextScreen(screenStatus),
    });
  };

  return (
    <div>
        <div className="greeting-container">
        <div className="greeting-text">Hello</div>
        <div className="user-name">{userData.fullName},</div>
      </div>
      <p className="survey-question-text">Where did you hear about it?</p>
      <div className="survey-question-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`social-media-option ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            <img
              src={selectedOption === option ? selectedCheck : unselectedCheck}
              alt="checkIcon"
            />
            <div >{option}</div>
          </div>
        ))}
      </div>
      <LoginFooter
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
      />
    </div>
  );
};

export default SurveyQuestion;
