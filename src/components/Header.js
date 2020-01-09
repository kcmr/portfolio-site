import React from "react"
import styles from "./Header.module.scss"
import Img from "gatsby-image"

export default ({ name, jobTitle, imgSrc }) => (
  <header className={styles.root}>
    <Img className={styles.image} fluid={imgSrc} alt="" />
    <div>
      <h1 className={styles.mainTitle}>{name}</h1>
      <p className={styles.subTitle}>{jobTitle}</p>
    </div>
  </header>
)
