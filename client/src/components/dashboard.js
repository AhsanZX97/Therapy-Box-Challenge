import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import Weather from './weather'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="container">
                <h1>PROFILE</h1>
                <p>Good day {this.state.first_name}</p>
                <div>
                    <p>Weather</p>
                    <Weather />
                </div>
                <div>
                    <p>News</p>
                </div>
                <div>
                    <p>Sport</p>
                </div>
                <div>
                    <p>Photos</p>
                </div>
                <div>
                    <p>Tasks</p>
                </div>
                <div>
                    <p>Clothes</p>
                </div>
            </div>
        )
    }
}

export default Dashboard