import React, { useState, Component } from 'react'
import PageLayout from '../../../layouts/master'
import TextBox from '../../../components/text-box'
import FormTitle from '../../../components/form-title'
import Submit from '../../../components/submit-btn'
import recipes from '../../../utils/recipe'

import { useHistory } from "react-router-dom"

import styles from './index.module.css'

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.isEdit = this.props.match.params.id !== undefined

    this.state = {
      title : '',
      time: '',
      description: ''
    }
  }
  
  componentDidMount = async () => {
    if (this.isEdit) {
      console.log('y');
      const recipe = await recipes.getRecipe(this.props.match.params.id)

      await this.setState({
        title: recipe.title,
        time: recipe.time,
        description: recipe.description
      })
      console.log(this.state);
    }
  }
  
  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  editRecipe = async (event) => {
    event.preventDefault()

    const id = this.props.match.params.id
    await recipes.editRecipe( {
      id: this.props.match.params.id,
      title: this.state.title,
      time: this.state.time,
      description: this.state.description
    } )

    this.props.history.push(`/recipe/${this.props.match.params.id}`)
  }

  createRecipe = async (event) => {
    event.preventDefault()

    await recipes.createRecipe( {
      title: this.state.title,
      time: this.state.time,
      description: this.state.description
    } )

    this.props.history.push('/')
  }

  render(){
    return (
      <PageLayout>
          <div className={styles["form-container"]}>
            <FormTitle value={this.isEdit ? "Edit a recipe" : "Create a recipe"} />
            <form onSubmit={this.isEdit ? this.editRecipe : this.createRecipe}>
              <TextBox 
                label="Title" 
                onChange={e => this.onChange(e, 'title')}
                value={this.state.title}
              />
              <TextBox 
                label="Description"  
                onChange={e => this.onChange(e, 'description')}
                value={this.state.description}
              />
              <TextBox 
                label="Time (min)" 
                type="number"  
                onChange={e => this.onChange(e, 'time')}
                value={this.state.time}
              />
              <Submit value={this.isEdit ? "Edit" : "Create"}/>
            </form>
          </div>
      </PageLayout>
    )
  }
}

export default RecipeForm