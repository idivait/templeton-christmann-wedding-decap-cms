import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/page"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const about = data.about.nodes[0]

  return (
    <Layout location={location} title={siteTitle} page={about.frontmatter.title}>
      <Page className="text-center" content={about} />
    </Layout>
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home page" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages\/about/gm"}}, limit: 1) {
      nodes {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
