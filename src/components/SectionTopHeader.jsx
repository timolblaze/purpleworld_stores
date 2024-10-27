import React from "react";
import styles from './SectionTopHeader.module.css'

export default function SectionTopHeader({heading, children}) {
  return (
    <div className={styles.topHeader}>
      <h3>{heading}</h3>
      {children}
    </div>
  );
}
