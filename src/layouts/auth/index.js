import React from 'react'
import Header from '../../components/header'
import styles from './index.module.css'

const PageLayout = (props) => {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
        <div className={styles["page-container"]}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout