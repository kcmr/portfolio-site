import React from "react"
import styles from "./Header.module.scss"

export default ({ name, jobTitle, imgSrc }) => (
  <div className={styles.root}>
    <img className={styles.image} src={imgSrc} alt="" />
    <div>
      <h1 className={styles.mainTitle}>{name}</h1>
      <p className={styles.subTitle}>{jobTitle}</p>
    </div>
  </div>
)
