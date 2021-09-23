import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'


import '../../css/Room.scss'
import TimeSince from '../../TimeSince'
import TemperatureCard from "../objects/TemperatureCard"
import CurtainsCard from "../objects/CurtainsCard"
import LightCard from "../objects/LightCard"
import PlantWateringCard from "../objects/PlantWateringCard"

class Bedroom extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperatureId: "5ea887161fb4c5451003aefa",
            temperature: 0,
            temperatureMin: 0,
            temperatureMax: 40,
            temperatureStep: 0.5,
            timeSince_temperatureValue: "",
            timeSince_temperatureValueDate: 0,

            curtainsId: "5ea887811fb4c5451003aefb",
            curtains: 0,
            curtainsMin: 0,
            curtainsMax: 100,
            curtainsStep: 1,
            timeSince_curtainsValue: "",
            timeSince_curtainsValueDate: 0,

            lightId: "5ea887aa1fb4c5451003aefc",
            light: 0,
            lightMin: 0,
            lightMax: 100,
            lightStep: 1,
            timeSince_lightValue: "",
            timeSince_lightValueDate: 0,

            plantsId : "5ea887da1fb4c5451003aefd",
            plants: 0,
            plantsMin: 0,
            plantsMax: 100,
            plantsStep: 1,
            timeSince_plantsValue: "",
            timeSince_plantsValueDate: 0,
            plantsSwitch: false
        }
    }

    dateConverter = (date) => new Date(date).getTime()

    componentDidMount = async () => {
        const res1 = await fetch('http://localhost:5000/bedroomLight', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par1 = await res1.json();
        this.setState({
            light: par1.light,
            timeSince_lightValueDate: this.dateConverter(par1.Update_Date),
            timeSince_lightValue: TimeSince(this.dateConverter(par1.Update_Date))
        })


        const res2 = await fetch('http://localhost:5000/bedroomTemperature', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par2 = await res2.json();
        this.setState({
            temperature: par2.temperature,
            timeSince_temperatureValueDate: this.dateConverter(par2.Update_Date),
            timeSince_temperatureValue: TimeSince(this.dateConverter(par2.Update_Date))
        })
        

        const res3 = await fetch('http://localhost:5000/bedroomCurtains', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par3 = await res3.json();
        this.setState({
            curtains: par3.curtains,
            timeSince_curtainsValueDate: this.dateConverter(par3.Update_Date),
            timeSince_curtainsValue: TimeSince(this.dateConverter(par3.Update_Date))
        })

        const res4 = await fetch('http://localhost:5000/bedroomPlants', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par4 = await res4.json();
        this.setState({
            plants: par4.plants,
            plantsSwitch: par4.plantsSwitch,
            timeSince_plantsValueDate: this.dateConverter(par4.Update_Date),
            timeSince_plantsValue: TimeSince(this.dateConverter(par4.Update_Date))
        })
    }


    handleInputChange = (event) => {
        const name = event.target.name
        const value = parseFloat(event.target.value)
        const min = parseFloat(event.target.min)
        const max = parseFloat(event.target.max)
        if (typeof min !== "undefined") {
            if (this.validation(min, max, value)) {
                this.setState({
                    [name]: value
                });
            } else {
                alert(`INVALID VALUE!\n\nPlease insert value between ${min} and ${max}`);
            }
        }
    }

    handleOnClick = (event) => {
        event.preventDefault();
        
        let data = {};
        
		let name = event.target.name;
        let switchName = `${name}Switch`;
        const targetId = `${name}Id`
        if (this.state[name] !== undefined && this.state[name] !== null) {
            if (name === "petFood") {
                data[name] = this.state[name]
                data["petPortion"] = this.state.petPortion
            } else {
                data[name] = this.state[name]
            }
        }
        if (this.state[switchName] !== undefined && this.state[switchName] !== null) {
            data[switchName] = this.state[switchName]
        }

        fetch(`http://localhost:5000/${name}/update/${this.state[targetId]}`, {
            method: 'PUT',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            },
            body:  JSON.stringify(data)
        })
        this.handleTimeAgo(event)
    }

    handleTimeAgo = (event) => {
        const ts = `timeSince_${event.target.name}Value`
        const tsd = `timeSince_${event.target.name}ValueDate`
        this.setState({
            [tsd]: new Date(),
            [ts]: TimeSince(new Date()),
        });
    }

    validation = (min, max, val) => {
        if (val >= min && val <= max) {
            return true;
        }
        return false;
    }

    wasSwitchChanged = (event) => {
        const name = `${event.target.name}Switch`;
        this.setState({
            [name]: !this.state[name]
        });
        console.log(`${name}: ${this.state[name]}`)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <TemperatureCard
                            temperature={this.state.temperature}
                            handleInputChange={this.handleInputChange}
                            temperatureMin={this.state.temperatureMin}
                            temperatureMax={this.state.temperatureMax}
                            temperatureStep={this.state.temperatureStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_temperatureValue={this.state.timeSince_temperatureValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <CurtainsCard
                            curtains={this.state.curtains}
                            handleInputChange={this.handleInputChange}
                            curtainsMin={this.state.curtainsMin}
                            curtainsMax={this.state.curtainsMax}
                            curtainsStep={this.state.curtainsStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_curtainsValue={this.state.timeSince_curtainsValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <LightCard
                            light={this.state.light}
                            handleInputChange={this.handleInputChange}
                            lightMin={this.state.lightMin}
                            lightMax={this.state.lightMax}
                            lightStep={this.state.lightStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_lightValue={this.state.timeSince_lightValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <PlantWateringCard
                            plants={this.state.plants}
                            handleInputChange={this.handleInputChange}
                            plantsMin={this.state.plantsMin}
                            plantsMax={this.state.plantsMax}
                            plantsStep={this.state.plantsStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_plantsValue={this.state.timeSince_plantsValue}
                            plantsSwitch={this.state.plantsSwitch}
                            wasSwitchChanged={this.wasSwitchChanged}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bedroom;