import React from 'react'
import Link from '../link'
import styles from './index.module.css'

const Header = () => {
    return (
        <header>
            <ul className={styles["main-nav"]}>
                <Link href="#" iconName="home" />
                <Link href="#" iconName="search" />
            </ul>
        </header>
    )
}

export default Header
