import React from 'react'
import styles from './index.module.css'

const ProfileIcon = ({width, onClick, image}) => {
    return (
        <img
            alt="" 
            width={width}
            src={process.env.PUBLIC_URL + `/profile-icons/${image}.png`}
            className={styles["profile-icon"]} 
            onClick={onClick} />
    )
}

export default ProfileIcon