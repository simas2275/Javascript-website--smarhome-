import React, { Component } from "react"
import { Container, Row, Col, Form } from 'react-bootstrap'

import '../../css/Room.scss'
import SolarPanelCard from '../objects/SolarPanelCard'
import EnergyConsumptionCard from '../objects/EnergyConsumptionCard'

class Electricity extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputPercent: "",
            inputkWh: "",
            outputPercent: "",
            outputkWh: "",
            usagekWh: ""
        }
    }

    componentDidMount = async () => {
        const res1 = await fetch('http://localhost:5000/energy', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par1 = await res1.json();
        this.setState({
            usagekWh: par1.usagekWh
        })


        const res2 = await fetch('http://localhost:5000/solar', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }
                 
        })
        const par2 = await res2.json();
        this.setState({
            inputPercent: par2.inputPercent,
            inputkWh: par2.inputkWh,
            outputPercent: par2.outputPercent,
            outputkWh: par2.outputkWh
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <SolarPanelCard
                            inputPercent={this.state.inputPercent}
                            inputkWh={this.state.inputkWh}
                            outputPercent={this.state.outputPercent}
                            outputkWh={this.state.outputkWh}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <EnergyConsumptionCard
                            usagekWh={this.state.usagekWh}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Electricity;