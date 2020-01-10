import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import SocialLinks from "./SocialLinks"
import Seo from "../components/Seo"
import styles from "./Layout.module.scss"
import gridStyles from "../styles/grid-layout.module.scss"
import classNames from "../utils/classnames"

export default ({ pageTitle, pageDescription, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "images/profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <Seo title={pageTitle} description={pageDescription}></Seo>

      <div className={classNames(styles.root, gridStyles.grid)}>
        <div className={gridStyles.header}>
          <Header
            name="Kus Cámara"
            jobTitle="Front End Developer"
            imgSrc={data.fileName.childImageSharp.fluid}
          ></Header>
        </div>
        {children}
      </div>

      <div className={styles.footer}>
        <hr />
        <SocialLinks />
      </div>
    </React.Fragment>
  )
}
