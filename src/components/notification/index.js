import React from 'react'
import styles from './index.module.css'

const Notification = ({messages}) => {
    return (
        <div className={styles.notification}>
            {messages.map((m, i) => (<div key={i} className={styles.message}>{m}</div>))}
        </div>
    )
}

export default Notification