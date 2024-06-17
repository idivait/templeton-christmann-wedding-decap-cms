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

const FAQPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const venmo = {
    usn: `@catandandrew`,
    url: `https://www.venmo.com/u/catandandrew`
  }
  const submenu = [
    { href: "#registry", title: "Registry" },
    { href: "#dress", title: "Dress Code" },
    { href: "#lodging", title: "Lodging"}
  ]
  const pinWidth = 700;

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="text-center p-6 pb-2">Frequently Asked Questions</h1>
      <ul className="flex flex-row justify-center text-center pb-6 underline">
        { submenu.map(({href, title})=>(
          <li className="p-2"><a href={href}>{title}</a></li>
        ))}
      </ul>
      <Page id="registry">
        <SidebarImage image={data.houseImage} alt="9 Kingshighway" className="content-start lg:content-center  sm:pr-4">
            <AltOverlay>Our 1900 house in Eureka.</AltOverlay>
        </SidebarImage>
        <SidebarContent className="basis-1/2 md:basis-full md:grow sm:basis-full">
        <h2>Do you have a Registry?</h2>
        <HalfLine align="left" />
        <p>We ask only your support and presence, but if you wish to give a gift, we would be honored to receive funds to help us in our journey as brand new home owners. We bought an old house (built in 1900) together last summer - There is much that needs updating (especially in the kitchen and basement) and all of our current discretionary funds are going towards making this house a home for us.
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
      <Page mobiledirection="flex-col-reverse" id="dress">
        <div className="basis-1/2 w-full sm:basis-full">
        <a  data-pin-do="embedBoard" data-pin-board-width={pinWidth} data-pin-scale-height="200" data-pin-scale-width="100" href="https://www.pinterest.com/bryarstorm/snappy-casual/">
          "Snappy Casual" Womens Pinterest Board
        </a>
        <a  data-pin-do="embedBoard" data-pin-board-width={pinWidth} data-pin-scale-height="200" data-pin-scale-width="100" href="https://www.pinterest.com/mjhaffield/mens-snappy-casual/">
          "Snappy Casual" Womens Pinterest Board
        </a>
        </div>
        <SidebarContent className="basis-3/4 grow md:basis-full md:grow sm:basis-full">
          <h2>What should I wear?</h2>
          <HalfLine align="left"/>
          <p>Dress code is "snappy casual": Informal, yet stylish. Dressier than a t-shirt, old jeans and sneakers but not as formal as black tie. Examples for either gender would be slacks with a shirt or polo, a cocktail dress, and a sports jacket with nice jeans. Think business casual, but for a wedding.</p>
          <p>See embedded pinterest boards for examples.</p>
        </SidebarContent>
      </Page>
      <Page id="lodging">
      <SidebarImage image={data.lodgingImage} className="content-start lg:content-center  sm:pr-4">
  
        </SidebarImage>
        <SidebarContent>
          <h2>Where should I stay?</h2>
          <p>Eureka has a plethora of BnBs and hotels. We will have more specific recommendations soon, but in the meantime if you're looking to book, the CAPC has a good list to get started:</p>
          <Button link="https://www.visiteurekasprings.com/category/where-to-stay/" className="bg-navy pt-2 pl-2 mt-4 w-auto inline-flex" >Eureka Springs Lodging</Button>
        </SidebarContent>
      </Page>
    </Layout>
  )
}

export const Head = () => <Seo title="Templeton Christmann Registry" />

export default FAQPage

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
    lodgingImage: file(relativePath: {eq: "eurekaclintonsteeds.jpg"}){
        childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`