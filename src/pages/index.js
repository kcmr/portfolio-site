import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import TagList from "../components/TagList"

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h2>Dummy projects</h2>
      {projects.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h3>
          </Link>
          <TagList tags={node.frontmatter.tags}></TagList>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
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
