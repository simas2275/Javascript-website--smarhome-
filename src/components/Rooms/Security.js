import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'


import '../../css/Room.scss'
import TimeSince from '../../TimeSince'
import SecuritySystemCard from "../objects/SecuritySystemCard"

class Security extends Component {
    constructor(props){
        super(props)
        this.state = {
            securityId : "5ea88f6d205fcc4704bd455c",
            timeSince_securityValue: "",
            timeSince_securityValueDate: 0,
            securitySwitch: false
        }
    }

    dateConverter = (date) => new Date(date).getTime()

    componentDidMount = async () => {
        const res1 = await fetch('http://localhost:5000/security', {
            method: 'GET',
            headers: {
                "x-auth-token": localStorage.getItem('x-auth-token'),
                "Content-Type": "application/json"              
            }   
                 
        })
        const par1 = await res1.json();
        this.setState({
            securitySwitch: par1.securitySwitch,
            timeSince_securityValueDate: this.dateConverter(par1.Update_Date),
            timeSince_securityValue: TimeSince(this.dateConverter(par1.Update_Date))
        })
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
                        <SecuritySystemCard
                            wasSwitchChanged={this.wasSwitchChanged}
                            securitySwitch={this.state.securitySwitch}
                            timeSince_securityValue={this.state.timeSince_securityValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Security;