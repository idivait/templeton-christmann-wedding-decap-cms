import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/page"
import { ActionButtonList } from "../components/buttons"

const FeaturedVendorList = ({list})=>(
  <>
    <h3>Featuring</h3>
    <ul>
    {list.map(({name, role})=>(
      <li>{name}, {role}</li>
    ))}
    </ul>
  </>
)

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const vendorList = [
    { name: "Carolyn-Anne Templeton", role: "bride"},
    { name: "Andrew Christmann", role: "groom"},
    { name: "Catherine Reed", role: "music"},
    { name: "Reillot Westin", role: "bartender"},
    { name: "Scott the Bartender", role: "bartender"},
    { name: "Susane I need to spell her name right", role: "photographer"},
    { name: "Amy Redmon", role: "wedding planner"}
  ]

  return (
    <Layout location={location} title={siteTitle} page="About">
      <Page className="text-center">
        <div className="flex flex-col sm:flex-row text-lg max-w-screen-lg mx-4 lg:mx-auto rounded ring ring-blush ring-inset outline outline-blush outline-offset-4 p-4 mb-6">
          <aside className="basis-3/4">
            <Img
            className="object-cover rounded h-full w-full"
              fluid={data.primaryImage.childImageSharp.fluid}
              alt="A picture of downtown Eureka Springs"
            />
          </aside>
          <content className="p-2 md:px-8 text-sm sm:text-base">
            <p>You are invited to</p>
            <h2 className="text-3xl font-bold">
              The Templeton-Christmann Wedding Reception
            </h2>
            <p>
              Saturday, September 7th at 6PM
              <br />
              Eureka Springs Community Center
            </p>
            <hr className="w-1/2 mx-auto border-blush border-2 rounded my-4" />
            <p>
              Sandra and Charles Templeton invite you to the wedding reception
              of their daughter, Carolyn-Anne Templeton, to Andrew Christmann,
              son of Margaret and David Christmann.
            </p>
            <p className="font-bold">Please RSVP before <span className="text-blush">August 7th.</span></p>
            <ActionButtonList />
          </content>

        </div>
        {/* <FeaturedVendorList list={vendorList} /> */}
      </Page>
    </Layout>
  );
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
    primaryImage: file(relativePath: { eq: "eurekaclintonsteeds.jpg"} ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
