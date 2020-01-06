import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </React.Fragment>
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
