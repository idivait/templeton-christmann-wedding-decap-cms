import * as React from "react"
import { Link } from "gatsby"

const Nav = ()=>{
    const navLinks = [
        // { path: `/registry`, name: `Registry`},
        // { path: `/about`, name: `About Eureka`},
        { path: `/faq/`, name: `FAQs`, external: true},
        { path: `/rsvp`, name: `RSVP`, external: true},
      ]
    return (
        <ul className="basis-1/4 self-right flex flex-row gap-4 text-sm md:justify-end mx-1">
            {navLinks.map((n)=>(
                <li className="hover:underline" key={n.path}>
                    {((n.external) && (
                        <a href={n.path}>{n.name}</a>
                    )) || (
                        <Link to={n.path}>{n.name}</Link>
                    )}
                        
                </li>
            ))}
        </ul>
    )
}

export default Nav;
