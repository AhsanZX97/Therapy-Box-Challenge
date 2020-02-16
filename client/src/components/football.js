import React, { Component, Input, Button } from 'react'
import { football } from './functions'


class Football extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamName: "",
            won: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/football')
            .then(res => res.json())
            .then(after => console.log(after))
    }

    handleSearchChange(e) {
        this.setState({teamName: e.target.value});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <h1>Input your team</h1>
                    <input
                        type='text'
                        onChange={this.handleSearchChange}
                    />
                    <input
                        type='submit'
                    />
                </form>
                
                <p>These teams you won against:</p>
                {this.state.won}
            </div>
        )
    }

}

export default Football