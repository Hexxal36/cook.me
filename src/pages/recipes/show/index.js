import React, { Component } from 'react'

import UserContext from '../../../Context'
import PageLayout from '../../../layouts/master'
import CommentForm from '../../../components/comment-form'
import Button from '../../../components/button'
import recipes from '../../../utils/recipe'
import comments from '../../../utils/comment'

import styles from './index.module.css'

class RecipeForm extends Component{
  constructor(props) {
      super(props)

      this.id = this.props.match.params.id
      this.state = {
        user: {},
        recipe: {
          title: 'loading',
          time: 'loading',
          description: 'loading',
          ingredients: []
        },
        comments: [],
        comment: {
          body: ''
        },
        commentPage: 1,
        commented : false
      }
    }

  static contextType = UserContext
  
  async componentDidMount() {
    await this.getComments()
    
    this.setState({user: this.context.user})

    const recipe = await recipes.getRecipe(this.id)
    this.setState({recipe: recipe})
    console.log(recipe);
  }

  getComments = async () => {
    const recipeComments = await comments.getComments(this.id)

    await this.setState({comments: recipeComments.reverse()})
  }

  onChange = (event, type) => {
    const newState = { comment: {}}
    newState.comment[type] = event

    this.setState(newState)
  }

  onShowMoreComments = (e) => {
    e.preventDefault()

    this.setState({commentPage : (this.state.commentPage + 1)})
  }

  onCommentSubmit = async (e) => {
    e.preventDefault()

    const newComment = await comments.createComment(this.id, this.state.comment.body)
    
    const commentSnapshot = this.state.comments
    commentSnapshot.unshift(newComment)
    
    this.setState({
      comments: commentSnapshot,
      commentPage : 1,
      commented: true
    })
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
            <img src={this.state.recipe.imageLink} className={styles["recipe-img"]} />
            {this.state.user.id === this.state.recipe.creator ? 
            (<div className={styles["recipe-actions"]}>
              <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button>
            </div>) : null
            }
            <div className={styles["recipe-title"]}>
              {this.state.recipe.title}
            </div>
            <div className={styles["recipe-info"]}>
              <div className={styles["recipe-ingredients"]}>
                <div className={styles["recipe-ing-title"]}>You will need:</div>
                <ul>
                  {(this.state.recipe.ingredients).map((ing, i) => ( <li key={i}>{ing.amount} {ing.amountType} {ing.type}</li>))}
                </ul>
              </div>
              <div className={styles["recipe-steps"]} dangerouslySetInnerHTML={
                {
                  __html: this.state.recipe.description
                }
              } />
              <div className={styles["recipe-time"]}>
                {recipes.formatTime(this.state.recipe.time)}
              </div>
            </div>
          </div>
          <div className={styles["comments-container"]}>
          Comments for this recipe:
          <ul className={styles.comments}>
            {(this.state.comments.slice(0, 3 * this.state.commentPage))
              .map((comment, i) => ( <li key={i}><div className={styles.comment} dangerouslySetInnerHTML={
              {
              __html : comment.body
              }
            }/></li>))}
            <div className={styles["show-more"]}>
            {
              this.state.comments.length > (this.state.comments.slice(0, 3 * this.state.commentPage).length) ? <Button onClick={this.onShowMoreComments} value="Show more"/> : null
            }
            </div>
          </ul>
          </div>
          {
            !(this.state.commented) ? <CommentForm onSubmit={this.onCommentSubmit} onChange={this.onChange} value={this.state.comment.body}/> : ''
          }
      </PageLayout>
    )
  }
}

export default RecipeForm