import * as React from "react"

const Page = ({className, children, content, mobiledirection, id})=>{
    const direction = mobiledirection || "flex-col";
    const contentClass= `flex ${direction} sm:flex-row text-lg max-w-screen-lg mx-4 lg:mx-auto rounded ring ring-blush ring-inset outline outline-blush outline-offset-4 p-4 mb-6`
    console.log(contentClass)
    return (      
    <article
        className="page"
        itemScope
        itemType="http://schema.org/Article"
        id={id}
      >
        {content && (
            <section
            // define styles used in markdown editor for pages
                className={`[&_.button]:button [&_h2]:text-2xl [&_h2]:font-bold ${className}`}
                dangerouslySetInnerHTML={{ __html: content?.html }}
                itemProp="articleBody"
            />
        )}
        <section className={className}>
          <div className={contentClass}>
            {children}
          </div>
        </section>

      </article>
    )
}

export default Page;