import React from 'react'
import styles from './LoadingComponent.module.css'
import ReactLoading from 'react-loading';


export default function LoadingComponent() {
  return (
    <div className={styles.ctn}>
      {/* Making use of the react-loading library to render React Loading Component that displays when items are being fetched */}
        <ReactLoading type='spin' color='#9966CB' />
    </div>
  )
}
