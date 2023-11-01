import { createBrowserRouter } from "react-router-dom";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import LoginScreen from "../screens/LoginScreen";
import LandingPage from "../pages/LandingPage";
import { AuthProtected } from "./AuthProtected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/posts",
    element: <LandingPage />,
  },
  
]);
