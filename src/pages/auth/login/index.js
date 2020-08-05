import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import styles from './index.module.css'

import PageLayout from '../../../layouts/auth'


import TextBox from '../../../components/text-box'
import Submit from '../../../components/submit-btn'
import FormTitle from '../../../components/form-title'

import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext)
  const history = useHistory()
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate('http://localhost:9999/api/user/login', {
        username,
        password
      }, (user) => {
        context.logIn(user)
        history.push('/')
      }, (e) => {
        console.log('Error', e)
      }
    )
  }

  return (
    <PageLayout>
      <FormTitle value="Login" />
      <form onSubmit={handleSubmit}>
          <TextBox 
            label="Username" 
            name="username" 
            type="text" 
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextBox 
            label="Password" 
            name="username" 
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Submit value="Login" />
      </form>
      <div className={styles["register-redirect"]}>
        Dont have an account? <Link to="/register">Register</Link>
      </div>
    </PageLayout>
  )
}

export default LoginPage