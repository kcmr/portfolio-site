import { graphql } from "gatsby"
import React from "react"
import ArticleSummary from "../components/ArticleSummary"
import Layout from "../components/Layout"
import styles from "./index.module.scss"

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className={styles.jumboText}>
        <p>
          I’m a Front End Developer with more than 13 years of experience. I
          started as a UI Developer and blablabla. The past 5 years I’ve been
          focused on JavaScript, Web Components and Node CLI tools.
        </p>
      </div>

      <div className={styles.projectList}>
        <h2>Projects</h2>
        <div className={styles.gridList}>
          {projects.map(({ node: project }) => {
            const metadata = project.frontmatter

            return (
              <ArticleSummary
                className={styles.gridItem}
                key={project.id}
                link={project.fields.slug}
                title={metadata.title}
                date={metadata.date}
                tags={metadata.tags}
                summary={metadata.excerpt}
              ></ArticleSummary>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
