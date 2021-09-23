import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { UserRegistration } from "./services/RegistrationService";
import { useHistory } from "react-router-dom";

import { UserContext } from "./UserContext";

const Register = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setUser(false);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const registerStatus = await UserRegistration(data);
    if (registerStatus === 200) {
      setUsername(username);
      setPassword(password);
      history.push("/");
    } else {
      alert("Invalid username");
    }
  };

  return (
    <div className="Register">
      <Container>
        <Row>
          <form className="login-form" onSubmit={onSubmit}>
            <h1 className="text-center">
              <span className="font-weight-bold">Register</span>
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
              Register
            </Button>
            <Button
              className="btn-lg btn-dark btn-block"
              onClick={() => {
                window.location = "/";
              }}
            >
              Back
            </Button>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
