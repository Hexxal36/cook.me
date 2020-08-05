import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../layouts/auth'
import styles from './index.module.css'
import TextBox from '../../../components/text-box'
import Submit from '../../../components/submit-btn'
import FormTitle from '../../../components/form-title'

import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

    await authenticate('http://localhost:9999/api/user/register', {
        username,
        password
      }, (user) => {
        this.context.logIn(user)
        this.props.history.push('/')
      }, (e) => {
        console.log('Error', e)
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
          <div className={styles["register-redirect"]}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
      </PageLayout>
    )
  }
}

export default RegisterPage