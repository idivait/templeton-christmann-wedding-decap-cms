import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/page"
import FAQPage from "./faq"
import { ActionButtonList } from "../components/buttons"
import { SidebarContent, SidebarImage } from "../components/sidebar"
import { HalfLine } from "../components/text"
import { AltOverlay } from "../components/image"

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
          <SidebarImage image={data.primaryImage} className="basis-auto w-full bg-white content-center rounded">
          </SidebarImage>
          <SidebarContent>
            <p>You are invited to</p>
            <h2 className="text-3xl font-bold">
              The Templeton-Christmann After Party
            </h2>
            <p>
Saturday, September 7th, 2024 at 5pm
</p><p>
              Eureka Springs Community Center
              <br/>
              44 Kingshighway
              <br/>
              Eureka Springs, AR 72632
            </p>
            <HalfLine/>
            <p>
            We will be exchanging vows in a small private ceremony on September 7th, 2024 in Eureka Springs, Arkansas.
            </p>
            <p>Please join us for our wedding reception.</p>
            <HalfLine/>
            <h3>More information will be available soon&trade;, please check back.</h3>
            <p className="font-bold">Please RSVP before <span className="text-blush">August 7th.</span></p>
            <ActionButtonList />
          </SidebarContent>
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
    primaryImage: file(relativePath: { eq: "chadgurleyreception.png"} ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
