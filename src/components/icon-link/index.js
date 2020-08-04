import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const IconLink = ({ iconName, href }) => {
    return (
        <Link to={href}>
            <FontAwesomeIcon icon={iconName} size="lg"/>
        </Link>
    )
}

export default IconLink