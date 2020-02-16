import React, { Component } from 'react'

export default class photos extends Component {

    fileSelectHandler(e) {
        
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectHandler}></input>
            </div>
        )
    }
}
