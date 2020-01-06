import { graphql } from "gatsby"
import React from "react"
import ArticleSummary from "../components/ArticleSummary"
import Layout from "../components/Layout"

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h2>Dummy projects</h2>
      {projects.map(({ node: project }) => {
        const metadata = project.frontmatter

        return (
          <ArticleSummary
            key={project.id}
            link={project.fields.slug}
            title={metadata.title}
            date={metadata.date}
            tags={metadata.tags}
            summary={project.excerpt}
          ></ArticleSummary>
        )
      })}
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
            date(formatString: "DD-MM-YYYY")
            tags
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
