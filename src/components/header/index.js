import React from 'react'
import IconLink from '../icon-link'
import styles from './index.module.css'

const Header = () => {
    return (
        <header>
            <ul className={styles["main-nav"]}>
                <li>
                    <IconLink href="#" iconName="home" />
                </li>
                <li>
                    <IconLink href="#" iconName="search" />
                </li>
            </ul>
        </header>
    )
}

export default Header
