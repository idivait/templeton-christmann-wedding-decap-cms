import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/page"
import { SidebarImage, SidebarContent } from "../components/sidebar"
import { HalfLine } from "../components/text"
import AltOverlay from "../components/image"
import { Button } from "../components/buttons"

const RegistryPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const venmo = {
    usn: `@catandandrew`,
    url: `https://www.venmo.com/u/catandandrew`
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Page>
        <SidebarImage image={data.houseImage} alt="9 Kingshighway" className="content-start lg:content-center  sm:pr-4">
            <AltOverlay>The house we purchased last summer on the upper loop in Eureka.</AltOverlay>
        </SidebarImage>
        <SidebarContent className="basis-1/2 md:basis-full md:grow sm:basis-full">
        <h1>Do you have a Registry?</h1>
        <HalfLine align="left" />
        <p>We ask only your support and presence, but if you wish to give a gift, we would be honored to receive funds to help us in our journey as brand new home owners. We bought a house together last summer after living together for four years - There is much that needs updating (especially in the kitchen and basement) and all of our current discretionary funds are going towards making this house a home for us.
        </p>
        <p>If you wish to contribute digitally, our Venmo is <a className="text-blush" href={venmo.url}>{venmo.usn}</a>. We also will have a table for gifts at the reception if you feel like surprising us.</p>
        <Button link={venmo.url} className="bg-navy pt-2 pl-2 mt-4 w-auto inline-flex">
            <Img 
                fluid={data.venmoImage.childImageSharp.fluid}
                alt="Venmo"
                className="w-7 mr-2"
            />
            Send a Cash Gift
        </Button>
        </SidebarContent>
      </Page>
    </Layout>
  )
}

export const Head = () => <Seo title="Templeton Christmann Registry" />

export default RegistryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    houseImage: file(relativePath: {eq: "9kingshighway.jpg"}){
        childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    venmoImage: file(relativePath: {eq: "venmo.webp"}){
        childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`