import React from "react"
import Header from "./Header"
import styles from "./Layout.module.scss"
import gridStyles from "../styles/grid-layout.module.scss"

function classNames() {
  return [...arguments].join(" ")
}

export default ({ children }) => (
  <div className={classNames(styles.root, gridStyles.grid)}>
    <div className={gridStyles.header}>
      <Header
        name="Kus Cámara"
        jobTitle="Front End Developer"
        imgSrc="https://avatars2.githubusercontent.com/u/92611?s=460&v=4"
      ></Header>
    </div>
    {children}
  </div>
)
