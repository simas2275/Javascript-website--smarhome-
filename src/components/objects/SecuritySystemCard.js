import React, { Component } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

class SecuritySystemCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="SecureHouseIcon"
                  src="https://img.icons8.com/ios/100/000000/smart-home-shield.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Security System</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  className="cardSwitch"
                  label="Security System Switch State"
                  name="security"
                  onChange={this.props.wasSwitchChanged}
                  checked={this.props.securitySwitch}
                />
              </Col>
            </Form.Group>
            <Button
              className="btn-lg btn-dark btn-block"
              name="security"
              onClick={this.props.handleOnClick}
            >
              Update
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`Last updated ${this.props.timeSince_securityValue} ago`}</small>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default SecuritySystemCard;
