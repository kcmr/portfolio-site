import { Link } from "gatsby"
import React from "react"
import TagList from "../components/TagList"
import styles from "./ArticleSummary.module.scss"
import { githubIcon, InlineIcon } from "../utils/icons"

export default ({ link, repoUrl, title, tags, summary, uid }) => {
  const shortUid = uid.split("-")[0]
  const tagLabelId = `label-${shortUid}`
  const linkLabelId = `link-${shortUid}`

  return (
    <article className={styles.root}>
      <h3 className={styles.title}>
        <Link to={link} id={linkLabelId}>
          {title}
        </Link>
        <a
          className={styles.iconLink}
          href={repoUrl}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Github repo"
        >
          <InlineIcon className={styles.icon} icon={githubIcon} />
        </a>
      </h3>

      <p className={styles.summary}>{summary}</p>

      <div className={styles.bottom} aria-labelledby={tagLabelId}>
        <span className="sr-only" id={tagLabelId}>
          Tags
        </span>
        <TagList tags={tags}></TagList>
      </div>
    </article>
  )
}
