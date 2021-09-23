import React, { createContext, useState } from "react";
import LoginService from "./services/LoginService";
import { Redirect } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(true);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
