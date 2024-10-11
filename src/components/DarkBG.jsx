import React from 'react'
import styles from './DarkBG.module.css'

export default function DarkBG({text, children}) {
  return (
    <div className={styles.darkBg}>
        <h2>{text}</h2>
        {children}
    </div>
  )
}
