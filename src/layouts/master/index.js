import React from 'react'
import Header from '../../components/header'
import styles from './index.module.css'
import Aside from '../../components/aside'

const PageLayout = (props) => {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
        <div className={styles["aside-container"]}>
          <Aside />
        </div>
        <div className={styles["page-container"]}>
          {props.children}
        <div className={styles["height-buffer"]}></div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout