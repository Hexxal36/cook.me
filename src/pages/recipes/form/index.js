import React, { useState } from 'react'
import PageLayout from '../../../layouts/master'
import TextBox from '../../../components/text-box'
import FormTitle from '../../../components/form-title'
import Submit from '../../../components/submit-btn'
import getCookie from '../../../utils/cookie'

import { useHistory } from "react-router-dom"

import styles from './index.module.css'

const RecipeForm = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [time, setTime] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    await fetch('http://localhost:9999/api/recipe', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
        time:time
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getCookie('x-auth-token')
      }
    })

    history.push('/')
  }

  return (
    <PageLayout>
        <div className={styles["form-container"]}>
          <FormTitle value="Create a recipe" />
          <form onSubmit={handleSubmit}>
            <TextBox label="Title" onChange={e => setTitle(e.target.value)} />
            <TextBox label="Description"  onChange={e => setDescription(e.target.value)}/>
            <TextBox label="Time (min)" type="number"  onChange={e => setTime(e.target.value)}/>

            <Submit value="Create"/>
          </form>
        </div>
    </PageLayout>
  )
}

export default RecipeForm