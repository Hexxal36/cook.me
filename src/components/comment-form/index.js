import React, { Component } from 'react'
import styles from './index.module.css'

import FormTitle from '../form-title'
import Submit from '../button'
import Textarea from '../textarea'

class CommentForm extends Component {
    render() {
        return (
          <div className={styles["comment-form-container"]}>
            <FormTitle value="Comment" />
            <form onSubmit={e => this.props.onSubmit(e)}>
                <Textarea 
                  value={this.props.value}
                  onChange={e => this.props.onChange(e, 'body')}
                />
                <Submit value="Comment" />
            </form>
          </div>
        )
    }
}

export default CommentForm