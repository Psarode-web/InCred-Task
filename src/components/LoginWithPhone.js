import React, { useContext } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles
import { AuthContext } from "./auth/authContext";
import { isMobileOrTabletDevice, showNextScreen } from "../helpers";
import LoginFooter from "./auth/LoginFooter";
import InvestmentDetailsCard from "./InvestmentDetailsCard";

const LoginWithPhone = () => {
  const { authDispatch, authState } = useContext(AuthContext);

  const { screenStatus } = authState;

  console.log("authState", authState);

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .test("valid-phone", "Please enter a valid phone number", (value) => {
        // Remove any non-digit characters
        const digitsOnly = value.replace(/\D/g, "");

        // Check if the resulting string is 12 digits long and starts with 6-9
        return /^[6-9]\d{11}$/.test(digitsOnly);
      })
      .transform((value, originalValue) => {
        // Remove any non-digit characters and limit to 12 characters
        return (originalValue.match(/\d/g) || []).slice(0, 12).join("");
      })
      .required("Please enter a phone number"),
  });

  
  const handlePhoneNumber = (phone, setFieldValue) => {
    setFieldValue("phoneNumber", phone);
    authDispatch({
      type: "updatePhoneNumber",
      payload: phone,
    });
  };

  const handleNextScreen = (setSubmitting) => {
    authDispatch({
      type: "updateScreen",
      payload: showNextScreen(screenStatus),
    });
    setSubmitting(false);
  };

  return (
    <>
      {isMobileOrTabletDevice() && (
        <div className=" align-items-center justify-content-center login-left-column">
          <InvestmentDetailsCard />
        </div>
      )}

      <div className="welcome-text">
        <span className="welcome-text-first">Welcome to </span>
        <span className="welcome-text-second">InCred Money</span>
      </div>

      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleNextScreen(setSubmitting);
        }}
      >
        {({ values, setFieldValue, submitForm, ...props }) => (
          <Form>
            {console.log(props)}
            <PhoneInput
              country={"in"} // Default to India
              onlyCountries={["in"]} // Show only India in the country list
              regions={"asia"} // Filter countries by region (optional)
              inputStyle={{ width: "100%" }}
              value={values.phoneNumber}
              onChange={(phone) => handlePhoneNumber(phone, setFieldValue)}
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error"
            />
            <LoginFooter type="submit" onClick={submitForm} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginWithPhone;
