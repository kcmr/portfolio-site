import React from "react"
import styles from "./SidebarBlock.module.scss"

export default ({ title, children }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
)
