import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import LoginService from "./services/LoginService";
import { useHistory } from "react-router-dom";

import "./css/Login.css";
import { UserContext } from "./UserContext";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setUser(false);
  }, []);

  const login = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const loginService = await LoginService(data);
    
    if (loginService === 200) {
      setUser(true);
      history.push("/kitchen");
      console.log("isejo");
    }else{
    alert(
      `INVALID`
    );
    }
  };

  return (
    <div className="Login">
      <Container>
        <Row>
          <form className="login-form" onSubmit={login}>
            <h1 className="text-center">
              <span className="font-italic">Smart</span>
              <span className="font-weight-bold">Home</span>
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Username
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="username"
                name="username"
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Password
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputGroup>
            <Button className="btn-lg btn-dark btn-block" type="submit">
              Login
            </Button>
            <Button
              className="btn-lg btn-dark btn-block"
              onClick={() => {
                window.location = "/register";
              }}
            >
              Register
            </Button>
          </form>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
