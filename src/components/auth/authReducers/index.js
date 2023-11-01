export const authInitialState = {
  screenStatus: {
    showPhoneNumberScreen: true,
    showOTPVerificationScreen: false,
    showUserDetailScreen: false,
    showSurveyQuestionScreen: false,
    showInvestmentQuestion: false,
    showLandingPage:false,
  },
  phoneNumber:"",
  userData:null
};

export function authReducer(state, action) {
  switch (action.type) {
    case "updateScreen":
      return {
        ...state,
        screenStatus: {
          ...state.screenStatus,
          ...action.payload,
        },
      };
      case "updatePhoneNumber":
      return {
        ...state,
        phoneNumber:action.payload
      };
      case "updateUserData":
        return {
          ...state,
          userData:action.payload
        };
    default:
      return state;
  }
}
