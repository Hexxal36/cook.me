import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import UserContext from '../../Context'

const LogoutBtn = ({value}) => {
    const context = useContext(UserContext)
    const history = useHistory()
    
    const logOut = () => {
      context.logOut()
      history.push('/')
    }

    return (
        <div className={styles["button"]}>
            <button onClick={logOut}>
                {value}
            </button>
        </div>
    )
}

export default LogoutBtn