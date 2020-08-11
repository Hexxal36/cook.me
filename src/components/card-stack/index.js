import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import ItemCard from '../item-card'
import recipes from '../../utils/recipe'

const CardStack = (props) => {
    const [recipeState, setRecipes] = useState([])

    const getRecipes = async () => {
        const recipesSnapshot = await recipes.getRecipes(props.user)
        setRecipes(recipesSnapshot)
    }

    const renderRecipes = () => {
        return recipeState.map((recipe, index) => {
            return (
                <ItemCard key={index} item={recipe}/>
            )
        })
    }

    useEffect(() => {
        getRecipes()
    }, [props.updatedRecipe, recipes.getRecipes])

    return (
        <div className={styles["card-container"]}>
            {renderRecipes()}
        </div>
    )
}

export default CardStack