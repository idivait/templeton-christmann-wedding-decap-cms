import * as React from "react"

export const HalfLine = ({align})=>{
    if (!align) align = "center";
    const styles = `w-1/2 ${ ((align === "center") && "mx-auto") || ((align === "left") && "test")} border-blush border-2 rounded my-4`
    return (
        <hr className={styles}/>
    )
}