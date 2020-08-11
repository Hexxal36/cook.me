import React, { Component } from 'react'
import IconLink from '../icon-link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'
import SearchForm from '../../components/search-form'

class Header extends Component {

    static contextType = UserContext

    render() {
        const {
            user
        } = this.context
            
        const links = getNavigation(user)

        return (
            <header>
                <ul className={styles["main-nav"]}>
                    <div className={styles["left-nav"]}>
                        {
                            links.map((navElement, i) => {
                                return (
                                <li key={`${i}-li`}>
                                    <IconLink
                                        key={`${i}-link`}
                                        href={navElement.link}
                                        iconName={navElement.iconName}
                                    />
                                </li>
                                )
                            })
                        }
                    </div>
                    <div className={styles["right-nav"]}>
                        <SearchForm />
                    </div>
                </ul>
            </header>
        )
    }
}

export default Header
