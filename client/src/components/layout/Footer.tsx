import React from 'react'
import Navigation from './Navigation'

interface FooterProps {
    backgroundColor: string
}

const Footer = ({ backgroundColor }: FooterProps) => {
    return (
        <footer>
            <Navigation backgroundColorStyle={backgroundColor}/>
        </footer>
    )
}

export default Footer
