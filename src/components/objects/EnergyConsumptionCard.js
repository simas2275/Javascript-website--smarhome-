import React, { Component } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";

class EnergyConsumptionCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="ElectricityIcon"
                  src="https://img.icons8.com/pastel-glyph/100/000000/electricity.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Energy Consumption</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row}>
                <Col xs={2} sm={2} md={4} lg={4}>
                  <Form.Label>Usage:</Form.Label>
                </Col>
                <Col xs={10} sm={10} md={8} lg={8}>
                  <p>{`${this.props.usagekWh} kWh`}</p>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default EnergyConsumptionCard;
