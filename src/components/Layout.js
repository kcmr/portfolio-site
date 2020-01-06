import React from "react"
import Header from "./Header"
import styles from "./Layout.module.css"

export default ({ children }) => (
  <div className={styles.root}>
    <Header title="Hola mundo desde Gatsby"></Header>
    {children}
  </div>
)
