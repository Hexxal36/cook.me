import React, { useState, Component } from 'react'
import PageLayout from '../../../layouts/master'
import recipes from '../../../utils/recipe'

import styles from './index.module.css'

class RecipeForm extends Component{
  constructor(props) {
      super(props)

      this.id = this.props.match.params.id
      this.state = {
        recipe: {
          title: 'loading',
          time: 'loading',
          description: 'loading',
        }
      }
    }

  async componentDidMount() {
    const recipe = await recipes.getRecipe(this.id)
    
    await this.setState({recipe: recipe})
  }

  onEdit = () => {
    this.props.history.push(`/recipe/edit/${this.id}`)
  }

  onDelete = async (event) => {
    await recipes.deleteRecipe(this.id)
    this.props.history.push('/')
  }

  render() {
    return (
      <PageLayout>
          <div className={styles["recipe-container"]}>
            <div className={styles["recipe-img"]}></div>
            <div className={styles["recipe-actions"]}>
              <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button>
            </div>
            <div className={styles["recipe-title"]}>
              {this.state.recipe.title}
            </div>
            <div className={styles["recipe-time"]}>
              {recipes.formatTime(this.state.recipe.time)}
            </div>
            <div className={styles["recipe-info"]}>
              <div>
                {console.log(this.state.recipe.ingredients)}
              </div>
              <div dangerouslySetInnerHTML={
                {
                  __html: this.state.recipe.description
                }
              } />
            </div>
          </div>
      </PageLayout>
    )
  }
}

export default RecipeForm