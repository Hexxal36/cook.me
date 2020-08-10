import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import recipies from '../../utils/recipe'

const ItemCard = ({item}) => {
    return (
        <div className={styles["item-card-container"]}>
            <Link to={`/recipe/${item._id}` }>
               <img alt="" src={item.imageLink? item.imageLink: 'https://www.askchefdennis.com/wp-content/uploads/2014/10/Fettuccine-Alfredo-2.jpg'} />
               <div className={styles["item-card-info"]}>
                    <div>
                        Title: {item.title}
                    </div>
                    <div>
                        Time: {recipies.formatTime(item.time)}
                    </div>
               </div>
           </Link>


        
        </div>
    )
}

export default ItemCard