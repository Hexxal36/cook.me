import React, { Component } from 'react'
import styles from './index.module.css'

import TextBox from '../text-box'
import Select from 'react-select'

class IngredientInput extends Component {
    render() {
        return (
            <div className={styles["ingredient-container"]}>
                <div className={styles["amount-input"]}> 
                    <TextBox 
                        type="number" 
                        name={`amount${this.props.name}`} 
                        onChange={e => this.props.onChange(e, 'amount')}
                        value={this.props.value.amount}
                        label="Amount"
                    />

                </div>
                <div className={styles["amount-type-input"]}>
                    <Select name={`amountType${this.props.name}`} 
                        value={{value: 'mL', label: 'mL'}}
                        options={
                            [
                                { value: 'mL', label: 'mL'}
                            ]
                        }
                        onChange={e => this.props.onChange(e, 'amountType')}
                    />
                </div>
                <div className={styles["text-input"]}>
                    <TextBox 
                        name={`amount${this.props.name}`} 
                        onChange={e => this.props.onChange(e, 'type')}
                        value={this.props.value.type}
                        label="..of:"
                    />
                </div>
                
            </div>
        )
    }
}

export default IngredientInput