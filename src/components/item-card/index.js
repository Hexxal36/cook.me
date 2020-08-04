import React from 'react'
import styles from './index.module.css'

const ItemCard = ({item}) => {
    return (
        <div className={styles["item-card-container"]}>
           <a href="">
               <img src="https://www.askchefdennis.com/wp-content/uploads/2014/10/Fettuccine-Alfredo-2.jpg" />
               <div className={styles["item-card-info"]}>
                    <div>
                        Title: Pasta
                    </div>
                    <div>
                        Time: 1h 30m
                    </div>
               </div>
           </a>


        
        </div>
    )
}

export default ItemCard