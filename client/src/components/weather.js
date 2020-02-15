import React, { Component } from 'react'

const API_KEY = "1df3b360b5967d372e9c55e9abff8abf"

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: undefined,
            temp: undefined
        }
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}&units=metric`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.main.temp + " C");
                this.setState({
                    location: "london",
                    temp: data.main.temp
                })
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.location}</p>
                <p>{this.state.temp}</p>
            </div>
        )
    }

}

export default Weather