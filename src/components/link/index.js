import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ iconName, href }) => {
    return (
        <li>
            <a href="{href}">
            <FontAwesomeIcon icon={iconName} size="lg"/>
            </a>
        </li>
    )
}

export default Link