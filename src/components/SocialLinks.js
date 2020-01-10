import React from "react"
import { githubIcon, mediumIcon, linkedinIcon, Icon } from "../utils/icons"
import styles from "./SocialLinks.module.scss"

const items = [
  {
    link: "https://www.linkedin.com/in/kuscamara/",
    text: "Linkedin",
    icon: linkedinIcon,
  },
  {
    link: "https://github.com/kcmr",
    text: "Github",
    icon: githubIcon,
  },
  {
    link: "http://medium.com/@usepotatoes",
    text: "Medium",
    icon: mediumIcon,
  },
]

const listItem = (props, index) => (
  <li className={styles.item} key={index}>
    <a
      className={styles.link}
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon icon={props.icon} width="24px" className={styles.icon} />
      <span>{props.text}</span>
    </a>
  </li>
)

export default () => (
  <address className={styles.root}>
    <ul className={styles.list}>{items.map(listItem)}</ul>
  </address>
)
