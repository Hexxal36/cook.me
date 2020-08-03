import React from 'react'
import styles from './index.module.css'
import ProfileBadge from '../profile-badge'

const Aside = () => {
    return (
        <aside>
            <div className={styles["profile-container"]}>
                <ProfileBadge />
            </div>

        </aside>
    )
}

export default Aside