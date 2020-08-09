import React from 'react'
import PageLayout from '../../../layouts/master';
import styles from './index.module.css'

const ErrorPage = () => {
  return (
    <PageLayout>
    <div className={styles["status-code"]}>404</div>
    <div className={styles["status-title"]}>Not Found</div>
    <div className={styles["logo-container"]}>
      <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.png'}/>
    </div>
    </PageLayout>
  )
}

export default ErrorPage