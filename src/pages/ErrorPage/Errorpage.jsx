import React from 'react'
import styles from './Errorpage.module.css'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <div className={styles.errorCtn}>
        <p>😟 😟 😟</p>
        <h3>OOPSSS!!! Looks like you landed in the wrong room</h3>
        <h4> Error 404: Page Not Found</h4>
        <Link to="/"> back to home</Link>
    </div>
  )
}
