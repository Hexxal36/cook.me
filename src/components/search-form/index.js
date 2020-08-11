import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import styles from './index.module.css'
import recipes from '../../utils/recipe'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Context'

import IconLink from '../icon-link'

const SearchForm = () => {
    const [query, setQuery] = useState('')

    const context = useContext(UserContext)
    const history = useHistory()
    

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        history.push(`/recipe/search/${query}`)
      }

    return (
        <form className={styles['search-form']} onSubmit={handleSubmit}>
            <input type="text" name="q" required onChange={e => setQuery(e.target.value)} autoComplete="off"/>
            
            <button>
                <li>
                    <FontAwesomeIcon icon="search" size="lg"/>
                </li>
            </button>
        </form>
    )
}

export default SearchForm