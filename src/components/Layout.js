import React from "react"
import Header from "./Header"
import styles from "./Layout.module.scss"

export default ({ children }) => (
  <div className={styles.root}>
    <Header
      name="Kus Cámara"
      jobTitle="Front End Developer"
      imgSrc="https://avatars2.githubusercontent.com/u/92611?s=460&v=4"
    ></Header>
    {children}
  </div>
)
