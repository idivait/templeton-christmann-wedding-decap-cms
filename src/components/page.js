import * as React from "react"

const Page = (props)=>{
    return (      
    <article
        className="page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
        // define styles used in markdown editor for pages
          className={`[&_.button]:button [&_h2]:text-2xl [&_h2]:font-bold ${props.className}`}
          dangerouslySetInnerHTML={{ __html: props.content?.html }}
          itemProp="articleBody"
        />
      </article>
    )
}

export default Page;