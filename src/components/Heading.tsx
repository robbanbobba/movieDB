import React from "react"
import "../assets/scss/Heading.scss"


interface HeadingProps {
    heading: string
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <>
            <h1 className="header">{heading}</h1>
        </>
    )
}

export default Heading