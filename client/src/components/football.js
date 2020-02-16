import React, { Component, Input, Button } from 'react'

class Football extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamName: "",
            won: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/football')
            .then(res => res.json())
            .then(list => {
                console.log(list)
                var arr = []
                for (var i = 0; i < list.length; i++) {
                    if (list[i]["HomeTeam"] === this.state.teamName)
                        if (list[i]["FTR"] === "H")
                            arr.push(list[i]["AwayTeam"])
                    if (list[i]["AwayTeam"] === this.state.teamName)
                        if (list[i]["FTR"] === "A")
                            arr.push(list[i]["HomeTeam"])
                }
                this.setState({won: arr})
            })
    }

    handleSearchChange(e) {
        this.setState({ teamName: e.target.value });
    }


    mySubmitHandler = (e) => {
        e.preventDefault();
        this.getList();
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
                <ol>
                    {this.state.won.map(team => <li>{team}</li>)}
                </ol>
                
            </div>
        )
    }

}

export default Football