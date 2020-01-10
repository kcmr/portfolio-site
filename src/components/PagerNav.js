import React from "react"
import styles from "./PagerNav.module.scss"

export default ({ className }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <a href="">← Previous</a>
    </li>
    <li className={styles.item}>
      <a href="">Home</a>
    </li>
    <li className={styles.item}>
      <a href="">Next →</a>
    </li>
  </ul>
)
