import React, { Component } from 'react'

class Football extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        var http = require('http');

        http.get(CORS_PROXY + 'http://www.football-data.co.uk/mmz4281/1718/I1.csv', function (err, data) {
            if (err) console.log(err);
            console.log(data);
            //any other code you may want
        });
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default Football