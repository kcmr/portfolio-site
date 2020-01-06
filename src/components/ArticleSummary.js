import React from "react"
import { Link } from "gatsby"
import TagList from "../components/TagList"
import styles from "./ArticleSummary.module.css"

export default ({ link, title, date, tags, summary }) => {
  return (
    <div className={styles.root}>
      <h3>
        <Link to={link}>
          <span>{title}</span> – <span>{date}</span>
        </Link>
      </h3>

      {tags.length && <TagList tags={tags}></TagList>}

      <p>{summary}</p>
    </div>
  )
}
