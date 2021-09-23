import React, { Component } from "react"
import { Row, Col, Card, InputGroup, FormControl, Button, Form } from 'react-bootstrap'

class PlantWateringCard extends Component {

    render() {
        return (
            <React.Fragment>
                <Card className="crd">
                    <Card.Header>
                        <Form.Group as={Row}>
                            <Col xs={1} sm={1} md={2} lg={2}>
                                <img className="cardImage" alt="LeavesIcon" src="https://img.icons8.com/android/24/000000/plant-under-rain.png"/>
                            </Col>
                            <Col xs={8} sm={9} md={6} lg={6}>
                                <Card.Title>Plant watering</Card.Title>
                            </Col>
                            <Col xs={3} sm={2} md={4} lg={4}>
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2" className="cardAddon">{this.props.plants}%</InputGroup.Text>
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
                                    name="plants"
                                    value={this.props.plants}
                                    onChange = {this.props.handleInputChange}
                                    min={this.props.plantsMin}
                                    max={this.props.plantsMax}
                                    step={this.props.plantsStep}
                                />
                            </Col>
                            <Col xs={4} sm={3} md={9} lg={9}>
                                <FormControl
                                    aria-describedby="basic-addon2"
                                    name="plants"
                                    value={this.props.plants}
                                    onChange={this.props.handleInputChange}
                                    min={this.props.plantsMin}
                                    max={this.props.plantsMax}
                                    step={this.props.plantsStep}
                                />
                            </Col>
                            <Col xs={2} sm={2} md={3} lg={3}>
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup.Append>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Form.Check 
                                    type="switch"
                                    id="toggleSwitch"
                                    className="cardSwitch"
                                    label="Plant Switch State"
                                    name="plants"
                                    onChange={this.props.wasSwitchChanged}
                                    checked={this.props.plantsSwitch}
                                />
                            </Col>
                        </Form.Group>
                        <Button
                            className="btn-lg btn-dark btn-block"
                            name="plants"
                            onClick={this.props.handleOnClick}
                        >
                            Update
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{`Last updated ${this.props.timeSince_plantsValue} ago`}</small>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        )
    }
}

export default PlantWateringCard;