import React from "react";
import TermAndCondition from "./TermAndCondition";


const LoginFooter = ({ type,onClick,disabled=false}) => {
  return (
    <div className="login-footer-container">
    <TermAndCondition />
    <button className="next-button" type={type} onClick={onClick} disabled={disabled}>
      Verify
    </button>
  </div>
  );
};

export default LoginFooter;
