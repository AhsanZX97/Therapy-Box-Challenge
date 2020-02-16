import React, { Component, Input, Button } from 'react'

class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [
                {
                    "name": "",
                    completed: false
                },
                {
                    "name": "",
                    completed: false
                },
                {
                    "name": "",
                    completed: false
                },
                {
                    "name": "",
                    completed: false
                },
                {
                    "name": "",
                    completed: false
                },
                {
                    "name": "",
                    completed: false
                }
            ]

        }
    }

    componentWillMount() {
        console.log(this.state.tasks)
    }

    handleInputChange(e) {
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                {
                    this.state.tasks.map(task => {
                        return (
                            <div> 
                                <input type = "text" value = {task.name}/> 
                                <input type = "checkbox" checked ={task.completed} onChange={this.handleCheckBox} />
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}

export default Task