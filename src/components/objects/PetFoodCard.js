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

class PetFoodCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="crd">
          <Card.Header>
            <Form.Group as={Row}>
              <Col xs={2} sm={1} md={2} lg={2}>
                <img
                  className="cardImage"
                  alt="PetFoodIcon"
                  src="https://img.icons8.com/android/24/000000/dog-bowl.png"
                />
              </Col>
              <Col xs={10} sm={11} md={10} lg={10}>
                <Card.Title>Pet food</Card.Title>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row}>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Form.Label>Feed every:</Form.Label>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <FormControl
                  aria-describedby="basic-addon2"
                  name="petFood"
                  value={this.props.petFood}
                  onChange={this.props.handleInputChange}
                  min={this.props.petFoodMin}
                  max={this.props.petFoodMax}
                />
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">h</InputGroup.Text>
                </InputGroup.Append>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Form.Label>Portion size:</Form.Label>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <FormControl
                  aria-describedby="basic-addon3"
                  name="petPortion"
                  value={this.props.petPortion}
                  onChange={this.props.handleInputChange}
                  min={this.props.petPortionMin}
                  max={this.props.petPortionMax}
                />
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon3">g</InputGroup.Text>
                </InputGroup.Append>
              </Col>
            </Form.Group>
            <Button
              className="btn-lg btn-dark btn-block"
              name="petFood"
              onClick={this.props.handleOnClick}
            >
              Update
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`Last updated ${this.props.timeSince_petFoodValue} ago`}</small>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
  }
}

export default PetFoodCard;
