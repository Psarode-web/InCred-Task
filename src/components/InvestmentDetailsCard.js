import React from "react";
import moneyBag from "../assets/moneyBag.png";
const InvestmentDetailsCard = () => {
  return (
    <div className="investment-details">
      <div className="return-container">
        <span className="fw-400 text-capitalize">Earn </span>
        <span className="fw-700 or-color">10-12% </span>
        <span className="fw-700 or-color">p.a.</span>
        <br />
        <span className="fix-return-label">fixed returns</span>
      </div>
      <div className="investment-minimum-container">
        <span className="fw-500">Start with minimum</span>
        <span className="fw-700">₹10,000</span>
      </div>
      <div className="investment-features-container">
        <div className="investment-feature">Senior Secured Bonds</div>
        <div className="investment-feature">Listed</div>
        <div className="investment-feature">Anytime Liquidity</div>
      </div>

      <div className="investment-assets">
        <img src={moneyBag} className="img-3" alt="moneyBag" />
        <div className="investment-asset-details">
          <div className="investment-asset-value">₹ 1,185+ Crs</div>
          <div className="investment-asset-label">Asset Under Management</div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetailsCard;
