import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import ItemCard from '../item-card'
import recipies from '../../utils/recipe'

const CardStack = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const recipes = await recipies.getRecipes(props.length)
        setRecipes(recipes)
    }

    const renderRecipes = () => {
        return recipes.map((recipe, index) => {
            return (
                <ItemCard key={index} item={recipe}/>
            )
        })
    }

    useEffect(() => {
        getRecipes()
    }, [props.updatedRecipe, recipies.getRecipes])

    return (
        <div className={styles["card-container"]}>
            {renderRecipes()}
        </div>
    )
}

export default CardStack