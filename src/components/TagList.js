import React from "react"
import styles from "./TagList.module.scss"

export default ({ tags }) => (
  <ul className={styles.root}>
    {tags.map((tag, index) => (
      <li className={styles.item} key={index}>
        {tag}
      </li>
    ))}
  </ul>
)
