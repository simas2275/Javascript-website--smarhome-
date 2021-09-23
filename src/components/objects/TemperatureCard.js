import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

class TemperatureCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={1} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="TemperatureIcon"
                  src="https://img.icons8.com/android/24/000000/temperature.png"
                />
              </Col>
              <Col xs={8} sm={9} md={6} lg={6}>
                <Card.Title>Temperature</Card.Title>
              </Col>
              <Col xs={3} sm={2} md={4} lg={4}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2" className="cardAddon">
                    {this.props.temperature}°C
                  </InputGroup.Text>
                </InputGroup.Append>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row}>
              <Col xs={6} sm={7} md={12} lg={12}>
                <input
                  type="range"
                  className="custom-range"
                  name="temperature"
                  value={this.props.temperature}
                  onChange={this.props.handleInputChange}
                  min={this.props.temperatureMin}
                  max={this.props.temperatureMax}
                  step={this.props.temperatureStep}
                />
              </Col>
              <Col xs={4} sm={3} md={9} lg={9}>
                <FormControl
                  type="number"
                  aria-describedby="basic-addon2"
                  name="temperature"
                  value={this.props.temperature}
                  onChange={this.props.handleInputChange}
                  min={this.props.temperatureMin}
                  max={this.props.temperatureMax}
                  step={this.props.temperatureStep}
                />
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">°C</InputGroup.Text>
                </InputGroup.Append>
              </Col>
            </Form.Group>
            <Button
              className="btn-lg btn-dark btn-block"
              name="temperature"
              onClick={this.props.handleOnClick}
            >
              Update
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`Last updated ${this.props.timeSince_temperatureValue} ago`}</small>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default TemperatureCard;
