import React, { Component } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

class GarageGateCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="GarageGateIcon"
                  src="https://img.icons8.com/wired/100/000000/garage-door.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Garage Gates</Card.Title>
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
                  label="Garage Gates Switch State"
                  name="garage"
                  onChange={this.props.wasSwitchChanged}
                  checked={this.props.garageSwitch}
                />
              </Col>
            </Form.Group>
            <Button
              className="btn-lg btn-dark btn-block"
              name="garage"
              onClick={this.props.handleOnClick}
            >
              Update
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`Last updated ${this.props.timeSince_garageValue} ago`}</small>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default GarageGateCard;
