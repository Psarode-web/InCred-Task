import React, { useReducer } from "react";
import { authInitialState, authReducer } from "../authReducers";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        authState: state,
        authDispatch: dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
