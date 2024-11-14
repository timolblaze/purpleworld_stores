import React from 'react'
import styles from './LoadingComponent.module.css'
import ReactLoading from 'react-loading';


export default function LoadingComponent() {
  return (
    <div className={styles.ctn}>
        <ReactLoading type='spin' color='#9966CB' />
    </div>
  )
}
