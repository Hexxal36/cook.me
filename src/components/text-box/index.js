import React from 'react'
import styles from './index.module.css'

const TextBox = ({type, label, value, name, onChange}) => {
    return (
        <div className={styles["text-input"]}>
            <input type={type} name={name} value={value} onChange={onChange} required autoComplete="off"/>
            <label className={styles["label-name"]}>
                <span className={styles["content-name"]}>{label}</span>
            </label>
        </div>
    )
}

export default TextBox