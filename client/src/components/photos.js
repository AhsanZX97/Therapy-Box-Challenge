import React, { Component } from 'react'
import add from './Add_picture.png'

export default class photos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pictures: []
        }
    }


    fileSelectHandler(e) {

    }

    render() {
        return (
            <div>
                <img id="image1" src={add} alt="your image" />
                <br></br>
                <img id="image1" src={add} alt="your image" />
                <br></br>
                <img id="image1" src={add} alt="your image" />
                <br></br>
                <img id="image1" src={add} alt="your image" />
                <br></br>
                <img id="image1" src={add} alt="your image" />
                <br></br>
                <img id="image1" src={add} alt="your image" />
            </div>
        )
    }
}
