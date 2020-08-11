import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../layouts/auth'
import styles from './index.module.css'
import TextBox from '../../../components/text-box'
import Submit from '../../../components/button'
import FormTitle from '../../../components/form-title'

import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

import Notification from '../../../components/notification'

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      username: "",
      password: "",
      rePassword: ""
    }
  }

  static contextType = UserContext

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {
      username,
      password
    } = this.state

    if (this.state.password !== this.state.rePassword) {
      const errSnapshot = this.state.errors
      if(errSnapshot.indexOf('Passwords do not match') === -1) {
        errSnapshot.push('Passwords do not match')
        this.setState({errors: errSnapshot})
      }
    }

    if(this.state.errors.length > 0) return

    await authenticate('http://localhost:9999/api/user/register', {
        username,
        password
      }, (user) => {
        this.context.logIn(user)
        this.props.history.push('/')
      }, (e) => {
        const errSnapshot = this.state.errors
        if(errSnapshot.indexOf('Username taken') === -1) {
          errSnapshot.push('Username taken')
          this.setState({errors: errSnapshot})
        }
      }
    )

  }

  render() {
      const {
        username,
        password,
        rePassword
      } = this.state

    return (
      <PageLayout>
          <FormTitle value="Register" />
          <form onSubmit={this.handleSubmit}>
              <TextBox 
                label="Username" 
                name="username" 
                type="text" 
                placeholder="" 
                value={username}
                onChange={(e) => this.onChange(e, 'username')}
              />
              <TextBox 
                label="Password" 
                name="password" 
                type="password" 
                placeholder=""
                value={password}
                onChange={(e) => this.onChange(e, 'password')}
              />
              <TextBox 
                label="Confirm Password" 
                name="repassword" 
                type="password" 
                placeholder=""
                value={rePassword}
                onChange={(e) => this.onChange(e, 'rePassword')}
              />
              <Submit value="Register" />
          </form>
          {this.state.errors.length > 0 ? <Notification messages={this.state.errors}/> : null}
          <div className={styles["register-redirect"]}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
      </PageLayout>
    )
  }
}

export default RegisterPage