import React from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
        <h3>Sign up to our newsletter</h3>
        <p>It's a long established fact that a reader will be distracted by the readable</p>
        <form className={styles.emailForm}>
            <input type="email" name="email" id="email" />
            <button type="submit">Sign up</button>
        </form>
    </section>
  )
}
