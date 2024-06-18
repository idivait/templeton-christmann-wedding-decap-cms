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

  const PageTitle = ({children, id})=>(
    <h2 className="mt-6" id={id}>
      {children}
    </h2>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="text-center p-6 pb-2">Frequently Asked Questions</h1>
      <ul className="flex flex-row justify-center text-center pb-6 underline">
        { submenu.map(({href, title})=>(
          <li className="p-2"><a href={href}>{title}</a></li>
        ))}
      </ul>
      <Page>
        <SidebarImage image={data.houseImage} alt="9 Kingshighway" className="content-start sm:pr-4">
            <AltOverlay>Our 1900 house in Eureka.</AltOverlay>
        </SidebarImage>
        <SidebarContent className="basis-1/2 md:basis-full md:grow sm:basis-full">
        <PageTitle id="registry">Do you have a Registry?</PageTitle>
        <HalfLine align="left" />
        <p>We ask only your support and presence, but if you wish to give a gift, we would be honored to receive funds or gift cards to home improvement stores (Ace Hardware, Lowe's or Home Depot) to help us in our journey as brand new home owners. 
        </p>
        <p>We bought an old house (built in 1900) together last summer - There is much that needs updating, especially in the kitchen and basement, and all of our current discretionary funds are going towards making this house a home for us.
        </p>
        <p>If you wish to contribute digitally, our Venmo is <a className="text-blush" href={venmo.url}>{venmo.usn}</a>. We also will have a table for gifts at the reception if you feel like surprising us.</p>
        <div className="grid mt-4 grid-cols-3 auto-rows-auto gap-4 mb-0 text-center">
        <Button link={venmo.url} className="pt-2 pl-2 mt-4 w-auto inline-flex col-span-3">
            <Img 
                fluid={data.venmoImage.childImageSharp.fluid}
                alt="Venmo"
                className="w-7 mr-2"
            />
            Send a Cash Gift
        </Button>
        <Button className="bg-navy text-sm" link="https://www.acehardware.com/gift-cards">
          Ace Hardware
        </Button>
        <Button className="bg-navy text-sm" link="https://www.buyatab.com/custom/lowes/?page=egift">
          Lowe's
        </Button>
        <Button className="bg-navy text-sm" link="https://www.homedepot.com/c/gift-cards">
          Home Depot
        </Button>
        </div>
        </SidebarContent>
      </Page>
      <Page>
        <div className="w-full sm:basis-full">
        <SidebarImage image={data.dressImage} className="content-start lg:content-center sm:pr-4" aspect="aspect-video sm:aspect-square">
          <div className="text-center text-sm p-1">
            Photo by <a className="text-orange" href="https://unsplash.com/@micheile?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">micheile henderson</a> on <a className="text-orange" href="https://unsplash.com/photos/clothes-hanging-on-white-rack-FpPcoOAk5PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash.</a>
          </div>
        </SidebarImage>
        </div>
        <SidebarContent className="">
          <PageTitle id="dress">What should I wear?</PageTitle>
          <HalfLine align="left"/>
          <p>Dress code is "snappy casual": Informal, yet stylish. Dressier than a t-shirt, old jeans and sneakers but not as formal as black tie. Examples for either gender would be slacks with a shirt or polo, a cocktail dress, and a sports jacket with nice jeans. Think business casual, but for a wedding.</p>
        </SidebarContent>
      </Page>
      <Page>
      <SidebarImage image={data.lodgingImage} aspect="aspect-video sm:aspect-square" className="content-start lg:content-center  sm:pr-4">
  <div className="text-center text-sm p-1">Photo by <a className="text-orange" href="https://www.flickr.com/photos/cwsteeds/">Clinton Steeds on Flickr.</a></div>
        </SidebarImage>
        <SidebarContent>
          <PageTitle id="lodging">Where should I stay?</PageTitle>
          <HalfLine align="left" />
          <p>Eureka has a plethora of BnBs and hotels. September is a very busy time in Eureka, so if you're travelling, we would recommend booking early. We will have more specific recommendations soon, but in the meantime if you're looking to book, the CAPC has a good list to get started:</p>
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
    dressImage: file(relativePath: {eq: "micheile-henderson-FpPcoOAk5PI-unsplash.jpg"}){
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`