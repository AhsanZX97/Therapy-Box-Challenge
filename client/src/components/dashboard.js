import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link, withRouter } from 'react-router-dom'

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
                    <Link to="/news">
                        <p>News</p>
                    </Link>
                </div>
                <div>
                <Link to="/football">
                    <p>Sport</p>
                </Link>
                </div>
                <div>
                    <Link to="/photos">
                        <p>Photos</p>
                    </Link>
                </div>
                <div>
                    <Link to="/tasks">
                        <p>Tasks</p>
                    </Link>
                </div>
                <div>
                    <p>Clothes</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)