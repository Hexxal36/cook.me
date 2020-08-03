import React from 'react'
import styles from './index.module.css'

const ProfileBadge = () => {
    return (
        <div className={styles["profile-info"]}>
            <div className={styles["profile-icon-container"]}>
                <div className={styles["profile-icon"]}></div>
            </div>
            <div className={styles["profile-text-container"]}>
                <p className={styles["profile-text"]}>Joni</p>
            </div>

            <div className={styles["profile-actions"]}>
                <ul>
                    <li>
                        <a href="#">Add a recipe</a>
                    </li>
                    <li>
                        <a href="#">Begin a meal</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileBadge