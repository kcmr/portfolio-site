import React from "react"
import Layout from "../components/Layout"
import SidebarBlock from "../components/SidebarBlock"
import PagerNav from "../components/PagerNav"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./project.module.scss"
import gridStyles from "../styles/grid-layout.module.scss"
import classNames from "../utils/classnames"
import { githubIcon, chromeIcon, InlineIcon } from "../utils/icons"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const {
    title,
    excerpt,
    techTags: tags,
    repo,
    demo,
    featuredImage,
  } = post.frontmatter
  const links = [
    {
      url: repo,
      icon: githubIcon,
      label: "Github repo",
    },
    {
      url: demo,
      icon: chromeIcon,
      label: "Website / Demo",
    },
  ]
  const hasLinks = links.map(link => link.url).filter(Boolean).length > 0

  return (
    <Layout pageTitle={title} pageDescription={excerpt}>
      <nav className={gridStyles.pager}>
        <PagerNav prev={pageContext.prev} next={pageContext.next} />
      </nav>

      <main className={styles.root}>
        <article className={styles.article}>
          <Img
            className={styles.image}
            fluid={featuredImage.childImageSharp.fluid}
          />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.excerpt}>{excerpt}</p>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </article>
      </main>

      <aside className={gridStyles.sidebar}>
        <SidebarBlock title="Technologies">
          <ul className={styles.sidebarList}>
            {tags.map((tag, index) => (
              <li
                className={classNames(
                  styles.sidebarListItem,
                  styles.borderBottom
                )}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </SidebarBlock>

        {hasLinks && (
          <SidebarBlock title="Links">
            <ul className={styles.sidebarList}>
              {links.map(
                ({ url, icon, label }, index) =>
                  url && (
                    <li className={styles.sidebarListItem} key={index}>
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.linkWithIcon}
                      >
                        <InlineIcon
                          icon={icon}
                          width="16px"
                          className={styles.linkIcon}
                        />
                        <span className={styles.linkText}>{label}</span>
                      </a>
                    </li>
                  )
              )}
            </ul>
          </SidebarBlock>
        )}
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        techTags
        repo
        demo
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 754) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
