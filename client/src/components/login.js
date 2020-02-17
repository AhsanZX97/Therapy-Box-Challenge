import React, { Component } from 'react'
import { login } from './functions'
import { Link, withRouter } from 'react-router-dom'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/dashboard`)
      }
    })
  }

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.onSubmit}>
          <h1>Dev Challenge</h1>
          <div className="row">
            <div className="col s6">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <div className="col s6">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>  
          </div>
          <button type="submit" className="btn">
            Sign in
          </button>
        </form>
        <Link to="/register">
          <button className="btn">
            Register
          </button>
        </Link>
      </div>
    )
  }
}

export default withRouter(Login)