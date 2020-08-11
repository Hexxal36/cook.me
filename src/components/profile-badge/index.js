import React, { useState } from 'react'
import styles from './index.module.css'
import LogoutBtn from '../logout-btn'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import ProfileIcon from '../profile-icon'

import users from '../../utils/user';

const ProfileBadge = ( {user} ) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [userState, setUser] = useState(user);
    const profileIcons = [
        'boy-blue',
        'boy-green',
        'boy-red',
        'boy-purple',
        'girl-blue',
        'girl-green',
        'girl-red',
        'girl-purple',
    ]

    function openModal() {
      setIsOpen(true);
    }

    async function updateProfileIcon(pic) {
        await users.updatePicture(user, pic)

        const userSnapshot = userState
        userSnapshot.picture = pic
        setUser(userSnapshot)
        closeModal()
    }

    function closeModal(){
     setIsOpen(false);
    }
    
    return (
        <div className={styles["profile-info"]}>
            <div className={styles["profile-icon-container"]}>
                <ProfileIcon image={userState.picture} width="90%" onClick={() => {openModal()}}/>
            </div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className={styles["icon-list"]}>
                    {
                        profileIcons.map(
                            (icon, i) => (
                                <ProfileIcon key={i} image={icon} width="23%" onClick={() => {updateProfileIcon(icon)}} />
                            )
                        )
                    }
                </div>
            </Modal>
            <div className={styles["profile-text-container"]}>
                <p className={styles["profile-text"]}>{userState.username}</p>
            </div>

            <div className={styles["profile-actions"]}>
                <ul>
                    <li className={styles["create-action"]}>
                         <Link to="/recipe/create">
                             Add a recipe
                         </Link>
                    </li>
                    <li className={styles["create-action"]}>
                        <Link to={`/recipe/user/${userState.username}`}>
                            My recipes
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