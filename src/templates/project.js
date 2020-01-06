import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
