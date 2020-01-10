import React from "react"
import { Link } from "gatsby"
import styles from "./PagerNav.module.scss"

export default ({ prev, next }) => (
  <ul className={styles.root}>
    {prev && (
      <li className={styles.item}>
        <Link to={prev}>← Previous</Link>
      </li>
    )}
    <li className={styles.item}>
      <Link to="/">Home</Link>
    </li>
    {next && (
      <li className={styles.item}>
        <Link to={next}>Next →</Link>
      </li>
    )}
  </ul>
)
