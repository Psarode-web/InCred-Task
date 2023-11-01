import React, { useState, useEffect, useContext } from "react";

import { toast } from "react-toastify";

import { AuthContext } from "./auth/authContext";
import { showNextScreen } from "../helpers";
import LoginFooter from "./auth/LoginFooter";
import ToastNotification from "./ToastNotification";
const OTPVerification = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [0, 1, 2, 3].map(() => React.createRef());
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [error, setError] = useState("");
  const [isResendDisabled, setResendDisabled] = useState(false); // Initially, the button is enabled
  const [resendTimer, setResendTimer] = useState(0); // Timer starts at 0
  const notify = () =>
    toast.error("Incorrect OTP.please enter the correct OTP", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const OTPSendSuccessfully = () =>
    toast("OTP send to your mobile number successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    setTimeout(() => {
      OTPSendSuccessfully();
    }, 1000);
  }, []);

  const { authDispatch, authState } = useContext(AuthContext);

  const { screenStatus,phoneNumber } = authState;
  // Effect to handle the timer
  useEffect(() => {
    let timer;

    if (isResendDisabled && resendTimer < 20) {
      timer = setTimeout(() => {
        setResendTimer(resendTimer + 1);
      }, 1000); // Increase the timer every second
    } else if (resendTimer === 20) {
      setResendDisabled(false); // Enable the "Resend OTP" button after 20 seconds
      setResendTimer(0); // Reset the timer
    }
    return () => clearTimeout(timer);
  }, [isResendDisabled, resendTimer]);

  const handleInputKeyDown = (event, index) => {
    if (event.key === "Backspace" && index === 0 && otp[index] === "") {
      // Clear all fields and move the cursor to the first input when Backspace is pressed in the first empty input
      setOTP(["", "", "", ""]); // Clear all fields
      inputRefs[index].current.focus(); 
    } else if (event.key === "Backspace" && otp[index] === "") {
      // Move to the previous input when Backspace is pressed and the current input is empty
      inputRefs[index - 1].current.focus();
    }
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;

    // If a digit is entered and the current input is not the last one, move focus to the next input
    if (/[0-9]/.test(value) && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    otp[index] = value;
    setOTP([...otp]);

    // Check if all input fields have valid digits
    const isValid = otp.every((value) => /[0-9]/.test(value));
    setSubmitDisabled(!isValid);
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join("");
    const validOTP = "1234";

    if (enteredOTP === validOTP) {
      setError(""); 
      handleNextScreen();
    } else {
      notify();
      setError("Invalid OTP. Please try again.");
    }
  };

  /**This function will reset the  Otp */
  const handleResendOTP = () => {
    setResendDisabled(true);
    setResendTimer(0);
  };

  /** This function will redirect to next screen */

  const handleNextScreen = () => {
    authDispatch({
      type: "updateScreen",
      payload: showNextScreen(screenStatus),
    });
  };

  return (
    <>
      <div className="otp-container d-flex flex-column">
        <div className="welcome-text">
          <span className="welcome-text-primary">Welcome to </span>
          <span className="welcome-text-secondary">InCred Money</span>
        </div>
        <div className="verification-text">we have send a verification code to <span>+{phoneNumber}</span></div>
        <div className="otp-code-container">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-code-box"
              value={otp[index]}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleInputKeyDown(e, index)}
              ref={ref}
            />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "end" }}>
        {isResendDisabled ? (
          <span>Resend OTP in {20 - resendTimer} seconds</span>
        ) : null}
      </div>
      {!isResendDisabled && (
        <div className="resend-otp">
          <span onClick={handleResendOTP} disabled={isResendDisabled}>
            Resend OTP
          </span>
        </div>
      )}

      <LoginFooter
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
      />
      <ToastNotification />
    </>
  );
};

export default OTPVerification;
