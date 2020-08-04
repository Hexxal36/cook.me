import React from 'react'
import styles from './index.module.css'
import ItemCard from '../item-card'

const CardStack = () => {
    return (
        <div className={styles["card-container"]}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default CardStack