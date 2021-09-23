import React, { Component } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

class PermissionCard extends Component {
  onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="PermissionCard"
                  src="https://img.icons8.com/ios/100/000000/user-rights.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Permissions</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Control
                    name="permission"
                    as="select"
                    onClick={this.props.handleInputChange}
                  >
                    {this.props.lists.map((list) => (
                      <option key={list}>{list}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="cardSwitch"
                    label="Admin Switch State"
                    name="permission"
                    onChange={this.props.wasSwitchChanged}
                    checked={this.props.permissionSwitch}
                  />
                </Col>
              </Form.Group>
              <Button
                className="btn-lg btn-dark btn-block"
                name="permission"
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

export default PermissionCard;
