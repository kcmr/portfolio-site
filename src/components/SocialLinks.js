import React from "react"
import githubIcon from "@iconify/icons-simple-icons/github"
import mediumIcon from "@iconify/icons-simple-icons/medium"
import linkedinIcon from "@iconify/icons-simple-icons/linkedin"
import { Icon } from "@iconify/react"
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

export default () => <ul className={styles.root}>{items.map(listItem)}</ul>
