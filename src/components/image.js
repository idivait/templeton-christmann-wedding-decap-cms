import * as React from "react"

export const AltOverlay = ({className, children})=>{
    const styles = `p-2 leading-tight text-sm text-center ${className}`
    return (
        <div className={styles}>
            {children}
        </div>
    )
}

export default AltOverlay