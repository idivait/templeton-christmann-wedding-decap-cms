import * as React from "react"
import Img from "gatsby-image"
import {AltOverlay} from "./image"

export const SidebarImage = ({image, alt, className, children})=>{
    const styles = `basis-full ${className}`
    return (
        <aside className={styles}>
            <div className="bg-purple rounded overflow-hidden">
            <Img
                className=""
                fluid={image.childImageSharp.fluid}
                alt={alt}
            />
            {!children && alt && (
                <AltOverlay>{alt}</AltOverlay>
            ) || (
                children
            )}
            </div>
        </aside>
    )
}

export const SidebarContent = ({className, children})=>{
    const styles=`p-2 md:px-8 text-sm sm:text-base shrink ${className}`
    return (
        <content className={styles}>
            {children}
        </content>
    )
}

export default SidebarContent