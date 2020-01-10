import { graphql } from "gatsby"
import React from "react"
import ArticleSummary from "../components/ArticleSummary"
import Layout from "../components/Layout"
import SidebarBlock from "../components/SidebarBlock"
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
        <h2>Self-Interview</h2>

        <SidebarBlock title="UI design or develop?">
          <p>Develop.</p>
        </SidebarBlock>
        <SidebarBlock title="Me in 3 years…">
          <p>
            3 years is a long time, but I hope to be a better and more
            experienced developer that can solve problems in simpler ways and
            take better decisions. In other words, I want to continue coding!
          </p>
        </SidebarBlock>
        <SidebarBlock title="Near goals">
          <p>
            I want to gain deeper knowledge about design patterns, refactoring
            techniques, clean coding, algorithms… Regarding to technologies, I
            want to learn more about Node and start using React.
          </p>
        </SidebarBlock>
        <SidebarBlock title="Learned lessons">
          <p>
            Everything changes, increases its complexity and even degrades over
            time, so it’s better to start things as simple as possible. Less is
            more.
          </p>
          <p>
            The use of a particular technology should not be a goal by itself
            but the medium to get the best result for a task.
          </p>
        </SidebarBlock>
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
