import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

class AddUserCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="PersonIcon"
                  src="https://img.icons8.com/windows/100/000000/person-male.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Add User</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Username
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Username"
                      value={this.props.username}
                      aria-describedby="basic-addon1"
                      name="username"
                      onChange={this.props.handleInputChange}
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Check
                    type="switch"
                    id="custom switch"
                    className="cardSwitch"
                    label="Admin Switch State"
                    name="username"
                    onChange={this.props.wasSwitchChanged}
                    checked={this.props.usernameSwitch}
                  />
                </Col>
              </Form.Group>
              <Button
                className="btn-lg btn-dark btn-block"
                name="username"
                onClick={this.props.handleOnClick}
              >
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default AddUserCard;
