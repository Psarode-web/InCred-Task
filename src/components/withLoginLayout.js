import React from "react";
import LoginHeader from "./auth/LoginHeader";
import InvestmentDetailsCard from "./InvestmentDetailsCard";
import { isMobileOrTabletDevice } from "../helpers";
/**This function is higher order component that in which we are changing right side ui */
const withLoginLayout = (WrappedComponent) => {
  return () => (
    <div className="login-container">
      {!isMobileOrTabletDevice() && (
        <div className=" align-items-center justify-content-center flex-column login-left-column">
          <InvestmentDetailsCard />
        </div>
      )}

      <div className="d-flex align-items-center flex-column login-right-column">
        <div className="login-right-inner-container">
          <LoginHeader />
          <WrappedComponent />
        </div>
      </div>
    </div>
  );
};

export default withLoginLayout;
