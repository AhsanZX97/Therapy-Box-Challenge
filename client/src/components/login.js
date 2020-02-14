import React, { Component } from 'react'
import { login } from './userFunctions'
import { Link, withRouter } from 'react-router-dom'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
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
      email: this.state.email,
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
      <div className="container">
        <form noValidate onSubmit={this.onSubmit}>
          <h1>Please sign in</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button type="submit">
            Sign in
          </button>
        </form>
        <Link to="/register">
          <button>
            Register
          </button>
        </Link>
      </div>
    )
  }
}

export default withRouter(Login)