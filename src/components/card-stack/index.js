import React, { Component } from 'react'
import styles from './index.module.css'
import ItemCard from '../item-card'
import recipes from '../../utils/recipe'

class CardStack extends Component {
    _isMounted = false

    constructor(props) {
        super(props)

        this.state = {
            recipeState: []
        }
    }

    getRecipes = async () => {
        let recipesSnapshot = null
        if(this.props.user) recipesSnapshot = await recipes.getRecipesByUser(this.props.user) 
        else if(this.props.query) recipesSnapshot = await recipes.getRecipesByQuery(this.props.query)
        else recipesSnapshot = await recipes.getRecipes()

        if(this._isMounted) this.setState({recipeState: recipesSnapshot})
    }

    renderRecipes = () => {
        return this.state.recipeState.map((recipe, index) => {
            return (
                <ItemCard key={index} item={recipe}/>
            )
        })
    }

    componentDidMount = () => {
        this._isMounted = true
        this.getRecipes()
    }

    componentDidUpdate = () => {
        if (this._isMounted) this.getRecipes()
    }

    componentWillUnmount = () => {
        this._isMounted = false
    }

    render() {
        return (
            <div className={styles["card-container"]}>
                {this.renderRecipes()}
            </div>
        )
    }
}

export default CardStack