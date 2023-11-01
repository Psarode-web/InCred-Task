import React from "react";

const TermAndCondition = () => {
  return (
    <div className="terms-and-conditions">
      <span className="terms-text">By proceeding, I accept the </span>
      <a
        href="https://www.incredmoney.com/terms-of-use"
        className="terms-link"
        target="_blank"
        rel="noreferrer"
      >
        Terms & Conditions
      </a>
      <span className="whatsapp-text">
        , and agree to receive messages such as OTPs & important updates on
        WhatsApp.
      </span>
    </div>
  );
};

export default TermAndCondition;
