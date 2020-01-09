import githubIcon from "@iconify/icons-simple-icons/github"
import { InlineIcon } from "@iconify/react"
import { Link } from "gatsby"
import React from "react"
import TagList from "../components/TagList"
import styles from "./ArticleSummary.module.scss"

export default ({ link, repoUrl, title, tags, summary }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        <a href={repoUrl} rel="noopener" target="_blank">
          <InlineIcon className={styles.icon} icon={githubIcon} />
        </a>
        <Link to={link}>
          <span>{title}</span>
        </Link>
      </h3>

      <p className={styles.summary}>{summary}</p>

      <div className={styles.bottom}>
        <TagList tags={tags}></TagList>
      </div>
    </div>
  )
}
