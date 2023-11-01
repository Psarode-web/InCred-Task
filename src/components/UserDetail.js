import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TermAndCondition from "./auth/TermAndCondition";
import { AuthContext } from "./auth/authContext";
import { showNextScreen } from "../helpers";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  referralCode: Yup.string(),
});

const UserDetail = () => {
  const { authDispatch, authState } = useContext(AuthContext);
  const { screenStatus } = authState;
  
  return (
    <div className="investment-form-container">
      <div className="investment-form-title">
        <span>Get started </span>{" "}
        <span> on your</span> {" "}<span>investment journey!</span>
      </div>{" "}
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          referralCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          console.log(values);
          authDispatch({
            type: "updateUserData",
            payload: values,
          });
          authDispatch({
            type: "updateScreen",
            payload: showNextScreen(screenStatus),
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="investment-form-group">
              <label htmlFor="fullName" className="investment-form-label">
                Full Name*
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="investment-form-input"
                placeholder="Enter your Name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="investment-error-message"
              />
            </div>

            <div className="investment-form-group">
              <label htmlFor="email" className="investment-form-label">
                Email*
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="investment-form-input"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="investment-error-message"
              />
            </div>

            <div className="investment-form-group">
              <label htmlFor="referralCode" className="investment-form-label">
                Referral Code
              </label>
              <Field
                type="text"
                id="referralCode"
                name="referralCode"
                className="investment-form-input"
                placeholder="Enter Referral Code"
              />
            </div>

            <ErrorMessage
              name="_error"
              component="div"
              className="investment-error-message"
            />
            <div className="login-footer-container">
              <TermAndCondition />
              <button
                className="next-button"
                type="submit"
                disabled={isSubmitting}
              >
                Verify
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserDetail;
