import React from 'react'
import styles from './index.module.css'

const TextBox = ({ value }) => {
    return (
        <div className={styles.title}>
            {value}
        </div>
    )
}

export default TextBox