import React, { Component } from 'react'
import PageLayout from '../../../layouts/master'
import TextBox from '../../../components/text-box'
import FormTitle from '../../../components/form-title'
import Button from '../../../components/button'
import ImageUpload from '../../../components/image-upload'
import recipes from '../../../utils/recipe'

import styles from './index.module.css'
import Textarea from '../../../components/textarea'
import IngredientInput from '../../../components/ingredient-input'

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.isEdit = this.props.match.params.id !== undefined

    this.state = {
      count : 0,
      title : '',
      time: '',
      description: '',
      imgUrl: '',
      ingredients: [],
    }
  }
  
  componentDidMount = async () => {
    if (this.isEdit) {
      const recipe = await recipes.getRecipe(this.props.match.params.id)

      await this.setState({
        title: recipe.title,
        time: recipe.time,
        description: recipe.description,
        imgUrl: recipe.imageLink,
        count: recipe.ingredients.length,
        ingredients: recipe.ingredients
      })
    }
  }
  
  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target ? event.target.value : event

    this.setState(newState)
  }

  onChangeIngredient = (event, type, index) => {
    const ingredientSnapshot = this.state.ingredients
    ingredientSnapshot[index][type] = event.target ? event.target.value : event.value

    this.setState({ ingredients : ingredientSnapshot })
  }

  editRecipe = async (event) => {
    event.preventDefault()

    await recipes.editRecipe( {
      id: this.props.match.params.id,
      title: this.state.title,
      time: this.state.time,
      description: this.state.description,
      imageLink: this.state.imgUrl,
      ingredients: this.state.ingredients
    } )

    this.props.history.push(`/recipe/${this.props.match.params.id}`)
  }

  createRecipe = async (event) => {
    event.preventDefault()

      await recipes.createRecipe( {
      title: this.state.title,
      time: this.state.time,
      description: this.state.description,
      imageLink: this.state.imgUrl,
      ingredients: this.state.ingredients
    } )

    this.props.history.push('/')
  }

  addIngredient = (event) => {
    event.preventDefault()

    this.setState({count: (this.state.count + 1)})
    
    const ingredientSnapshot = this.state.ingredients
    ingredientSnapshot.push({
      amount: '',
      amountType: '',
      type: ''
    })

    this.setState({ingredients: ingredientSnapshot})
  }

  removeIngredient = (event) => {
    event.preventDefault()

    this.setState({count: (this.state.count - 1)})

    const ingredientSnapshot = this.state.ingredients
    ingredientSnapshot.pop()

    this.setState({ingredients: ingredientSnapshot})
  }

  renderIngredients = () => {
    const inputs = []
    for (let i = 0; i < this.state.count; i++) {
      inputs[i] = (<IngredientInput value={this.state.ingredients[i]} name={i} onChange={(e, type) => this.onChangeIngredient(e, type, i)} />)
    }
    return inputs
  }

  render(){
    return (
      <PageLayout>
          <div className={styles["form-container"]}>
            <FormTitle value={this.isEdit ? "Edit a recipe" : "Create a recipe"} />
            <form onSubmit={this.isEdit ? this.editRecipe : this.createRecipe}>
              <div className={styles["common-inputs"]}>
                <TextBox 
                  label="Title" 
                  onChange={e => this.onChange(e, 'title')}
                  value={this.state.title}
                />
                <TextBox 
                  label="Time (min)" 
                  type="number"  
                  onChange={e => this.onChange(e, 'time')}
                  value={this.state.time}
                />
                <ImageUpload src={this.state.imgUrl} onUpload={e => this.onChange(e, 'imgUrl')}/>
              </div>
              <div className={styles["complex-inputs"]}>
                <div className={styles["ingredients"]}>
                  { this.renderIngredients() }
                  <div className={styles["ingredient-buttons"]}>
                    <Button value="+ Ingredient" onClick={e => this.addIngredient(e)}/>
                    <Button value="- Ingredient" onClick={e => this.removeIngredient(e)}/>
                  </div>
                </div>
                <div className={styles["steps"]}>
                  <Textarea 
                    onChange={e => this.onChange(e, 'description')} 
                    value={this.state.description}
                  />
                </div>
              </div>
              <div className={styles["submit-btn"]}>
                <Button type="submit" value={this.isEdit ? "Edit" : "Create"}/>
              </div>
            </form>
          </div>
      </PageLayout>
    )
  }
}

export default RecipeForm