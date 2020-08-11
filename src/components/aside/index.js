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
                <ProfileBadge user={context.user}/>:
                
                <div>
                    <div className={styles["logged-out"]}>
                        You need to login to share your recipes to the world.
                    </div>
                    <img alt="" src={process.env.PUBLIC_URL + '/logo.png'}/>
                </div>
                
                }
            </div>

        </aside>
    )
}

export default Aside