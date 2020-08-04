import React from 'react'
import styles from './index.module.css'

const SubmitBtn = ({value}) => {
    return (
        <div className={styles["submit-input"]}>
            <input type="submit" value={value}/>
        </div>
    )
}

export default SubmitBtn