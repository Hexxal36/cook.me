import React from 'react'
import styles from './index.module.css'
import LogoutBtn from '../logout-btn'
import { Link } from 'react-router-dom'


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
                    <li className={styles["create-action"]}>
                         <Link to="/recipe/create">
                             Add a recipe
                         </Link>
                    </li>
                    <li className={styles["create-action"]}>
                        <Link to="/meal/create">
                            Begin a meal
                        </Link>
                    </li>
                    <li>
                        <LogoutBtn value="logout"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileBadge