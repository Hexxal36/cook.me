import React, { Component } from 'react'
import styles from './index.module.css'

import TextBox from '../text-box'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class IngredientInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles["ingredient-container"]}>
                <div className={styles["amount-input"]}> 
                    <TextBox type="number" name={`amount${this.props.name}`} onChange={e => this.props.onChange(e, 'amount')}/>

                </div>
                <div className={styles["amount-type-input"]}>
                    <Select name={`amountType${this.props.name}`} options={
                        [
                            { value: 'mL', label: 'mL'}
                        ]
                    }
                    onChange={e => this.props.onChange(e, 'amountType')}
                    />
                </div>
                <div className={styles["text-input"]}>
                    <TextBox name={`amount${this.props.name}`} onChange={e => this.props.onChange(e, 'type')}/>
                </div>
                
            </div>
        )
    }
}

export default IngredientInput