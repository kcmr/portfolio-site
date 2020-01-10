import { graphql } from "gatsby"
import React from "react"
import ArticleSummary from "../components/ArticleSummary"
import Layout from "../components/Layout"
import HomeSidebar from "../components/HomeSidebar"
import styles from "./index.module.scss"
import gridStyles from "../styles/grid-layout.module.scss"

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <main>
        <div className={styles.jumboText}>
          <p>
            I’m a self-taught Front End Developer with more than 13 years of
            experience. I started working as UI Developer in 2006 and since that
            I combined web development with, to a lesser extent, UI design. For
            the past 5 years I have worked mainly with JavaScript and Web
            Components (Polymer, LitElement) and also Node for CLI tools.
          </p>
          <p>I like everything related with QA, testing and automation.</p>
        </div>

        <section className={styles.projectList}>
          <h2>Featured projects</h2>
          <div className={styles.gridList}>
            {projects.map(({ node: project }) => {
              const metadata = project.frontmatter

              return (
                <ArticleSummary
                  className={styles.gridItem}
                  uid={project.id}
                  key={project.id}
                  link={project.fields.slug}
                  repoUrl={metadata.repo}
                  title={metadata.title}
                  tags={metadata.tags}
                  summary={metadata.excerpt}
                ></ArticleSummary>
              )
            })}
          </div>
        </section>
      </main>

      <aside className={gridStyles.sidebar}>
        <HomeSidebar />
      </aside>
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
            repo
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
