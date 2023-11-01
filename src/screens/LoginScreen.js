import React, { useMemo, useContext } from "react";
import withLoginLayout from "../components/withLoginLayout";
import LoginWithPhoneScreen from "./LoginWithPhoneScreen";
import OTPVerificationScreen from "./OTPVerificationScreen";
import UserDetailScreen from "./UserDetailScreen";
import SurveyQuestionScreen from "./SurveyQuestionScreen";
import InvestmentQuestionScreen from "./InvestmentQuestionScreen";
import { AuthContext } from "../components/auth/authContext";

const LoginScreen = () => {
  const { authState } = useContext(AuthContext);
  const { screenStatus } = authState;

  /**
   * This function is change right part of Ui based upon screenStatus
   */
  const handleScreen = useMemo(() => {
    switch (true) {
      case screenStatus.showPhoneNumberScreen:
        return <LoginWithPhoneScreen key="phoneNumber" />;
      case screenStatus.showOTPVerificationScreen:
        return <OTPVerificationScreen key="otpVerification" />;
      case screenStatus.showUserDetailScreen:
        return <UserDetailScreen key="userDetail" />;
      case screenStatus.showSurveyQuestionScreen:
        return <SurveyQuestionScreen key="surveyQuestion" />;
      case screenStatus.showInvestmentQuestion:
        return <InvestmentQuestionScreen key="investmentQuestion" />;
      default:
        return null;
    }
  }, [screenStatus]);

  return <>{handleScreen}</>;
};

export default withLoginLayout(LoginScreen, "Verify");
