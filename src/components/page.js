import * as React from "react"

const Page = ({className, children, content})=>{
    return (      
    <article
        className="page"
        itemScope
        itemType="http://schema.org/Article"
      >
        {content && (
            <section
            // define styles used in markdown editor for pages
                className={`[&_.button]:button [&_h2]:text-2xl [&_h2]:font-bold ${className}`}
                dangerouslySetInnerHTML={{ __html: content?.html }}
                itemProp="articleBody"
            />
        )}
        <section className={className}>{children}</section>

      </article>
    )
}

export default Page;