import React, { useContext, useState } from "react";
import { AuthContext } from "./auth/authContext";
import LoginFooter from "./auth/LoginFooter";
import selectedCheck from "../assets/selectedCheck.png";
import unselectedCheck from "../assets/unselectedCheck.png";
import { useNavigate } from "react-router-dom";

const InvestmentQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const options = ["Less than 1 Lakh", "1 to 5 Lakhs", "More than 5 Lakhs"];

  const { authState } = useContext(AuthContext);
  const { userData } = authState;

  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSubmitDisabled(false);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      console.log("Selected option: ", selectedOption);
      handleNextScreen();
    } else {
      console.error("Please select an option before submitting.");
    }
  };

  const handleNextScreen = () => {
    navigate("/posts");
  };

  return (
    <div className="investment-form">
      <div className="greeting-container">
        <div className="greeting-text">Hello</div>
        <div className="user-name">{userData.fullName},</div>
      </div>
      <p className="investment-question">How much do you want to invest?</p>
      <div className="investment-options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`investment-option ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            <img
              src={selectedOption === option ? selectedCheck : unselectedCheck}
              alt="checkIcon"
            />
            <div className="investment-option-text">{option}</div>
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

export default InvestmentQuestion;
