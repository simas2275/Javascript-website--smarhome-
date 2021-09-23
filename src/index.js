import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UserProvider } from "./UserContext";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
