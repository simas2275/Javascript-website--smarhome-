import React, { Component } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";

class SolarPanelCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="SolarPanelIcon"
                  src="https://img.icons8.com/android/24/000000/solar-panel.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Solar Panel</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group as={Row}>
                <Col xs={2} sm={2} md={4} lg={4}>
                  <Form.Label>Input:</Form.Label>
                </Col>
                <Col xs={10} sm={10} md={8} lg={8}>
                  <p>
                    {`${this.props.inputPercent}% | ${this.props.inputkWh} kWh`}
                  </p>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col xs={3} sm={2} md={4} lg={4}>
                  <Form.Label>Output:</Form.Label>
                </Col>
                <Col xs={9} sm={10} md={8} lg={8}>
                  <p>
                    {`${this.props.outputPercent}% | ${this.props.outputkWh} kWh`}
                  </p>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default SolarPanelCard;
