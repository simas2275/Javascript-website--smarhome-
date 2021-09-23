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

class CurtainsCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={1} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="CuratainsIcon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA7ElEQVRIie1VuwrCQBCciIX2dpZa+AdaaaFfIHYqCH6ThX+hP6GF2EcLBb8iFhqLjGETcrd3IXYOLLvMztzmHhDgDwWBqONfrF2reFEVMcw7aYp+w9Xvs4OWobbCZ0DPUFc2YCTqoYcvA9sdnEX/VMJvFbQBvAE8GS9yqt/1iNZI3vUOwJ6+laPX/gUA6gAe5McAJqzv7Gl+VbAkFyLZRQDgQm5RdkBRzAuGmiKFzzO9GWorTAMCEVtyU9GfMW9yWucBEgfmgeD6zEfN7DIgZO4KrsN8dfBnYLu4SOgiRZsif27aT+erd9X9oeMDd0pStLEKIP4AAAAASUVORK5CYII="
                />
              </Col>
              <Col xs={8} sm={9} md={6} lg={6}>
                <Card.Title>Curtains</Card.Title>
              </Col>
              <Col xs={2} sm={2} md={4} lg={4}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2" className="cardAddon">
                    {this.props.curtains}%
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
                  name="curtains"
                  value={this.props.curtains}
                  onChange={this.props.handleInputChange}
                  min={this.props.curtainsMin}
                  max={this.props.curtainsMax}
                  step={this.props.curtainsStep}
                />
              </Col>
              <Col xs={4} sm={3} md={9} lg={9}>
                <FormControl
                  aria-describedby="basic-addon2"
                  name="curtains"
                  value={this.props.curtains}
                  onChange={this.props.handleInputChange}
                  min={this.props.curtainsMin}
                  max={this.props.curtainsMax}
                  step={this.props.curtainsStep}
                />
              </Col>
              <Col xs={2} sm={2} md={3} lg={3}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                </InputGroup.Append>
              </Col>
            </Form.Group>
            <Button
              className="btn-lg btn-dark btn-block"
              name="curtains"
              onClick={this.props.handleOnClick}
            >
              Update
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`Last updated ${this.props.timeSince_curtainsValue} ago`}</small>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default CurtainsCard;
