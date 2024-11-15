import React from 'react'
import styles from './DarkBG.module.css'

export default function DarkBG({text, children}) {
  return (
    <div className={styles.darkBg}>
      {/* Importing Dynamic Data using the text props */}
        <h2>{text}</h2>
      {/* Importing Dynamic Data using the children props */}
        {children}
    </div>
  )
}
