import React, { useState, Component } from 'react'
import PageLayout from '../../../layouts/master'
import recipies from '../../../utils/recipe'

import styles from './index.module.css'

class RecipeForm extends Component{
  constructor(props) {
      super(props)

      this.id = this.props.match.params.id
      this.state = {
        recipe: {
          title: 'loading',
          time: 'loading',
          description: 'loading'
        }
      }
    }

  async componentDidMount() {
    this.recipe = await recipies.getRecipe(this.id)
    
    await this.setState({recipe: this.recipe})
  }

  handleSubmit = async (event) => {
    
    this.props.history.push('/')
  }

  render() {
    return (
      <PageLayout>
          <div className={styles["recipe-container"]}>
            <div className={styles["recipe-img"]}></div>
            <div className={styles["recipe-actions"]}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
            <div className={styles["recipe-title"]}>
              {this.state.recipe.title}
            </div>
            <div className={styles["recipe-time"]}>
              {recipies.formatTime(this.state.recipe.time)}
            </div>
            <div>
              {this.state.recipe.description}  
            </div>
  
          </div>
      </PageLayout>
    )
  }
}

export default RecipeForm