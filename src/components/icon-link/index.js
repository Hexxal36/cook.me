import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = ({ iconName, href }) => {
    return (
        <a href="{href}">
        <FontAwesomeIcon icon={iconName} size="lg"/>
        </a>
    )
}

export default IconLink