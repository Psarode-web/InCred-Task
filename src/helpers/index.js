
/**This function hide current ui and show new ui when we click on next button */
export const showNextScreen = (screenStatus) => {
  if (screenStatus.showSurveyQuestionScreen) {
    return {
      showSurveyQuestionScreen: false,
      showInvestmentQuestion: true,
    };
  }
  if (screenStatus.showUserDetailScreen) {
    return {
      showUserDetailScreen: false,
      showSurveyQuestionScreen: true,
    };
  }
  if (screenStatus.showOTPVerificationScreen) {
    return {
      showOTPVerificationScreen: false,
      showUserDetailScreen: true,
    };
  }

  return {
    showPhoneNumberScreen: false,
    showOTPVerificationScreen: true,
  };
};

/**This function will check mobile device */
export const isMobileOrTabletDevice = () => {
  // Regular expression to match common mobile and tablet device user agents
  const mobileOrTabletDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  
  // Check if the userAgent matches the regex
  return mobileOrTabletDeviceRegex.test(navigator.userAgent);
};
