import React from 'react'
import styles from './index.module.css'

const Button = ({type, value, onClick}) => {
    return (
        <div className={styles["button"]}>
            <button type={type ? type : ''} onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button