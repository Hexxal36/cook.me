import React, { useContext } from 'react'
import UserContext from '../../Context'
import styles from './index.module.css'
import ProfileBadge from '../profile-badge'

const Aside = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn


    return (
        <aside>
            <div className={styles["profile-container"]}>
                {loggedIn? 
                <ProfileBadge />:
                <div>
                    logged-out
                </div>
                
                }
            </div>

        </aside>
    )
}

export default Aside