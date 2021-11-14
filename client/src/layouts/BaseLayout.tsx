import React, { ReactNode, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components/layout'
import { Breakpoint } from '../variables'
import { Colors } from '../variables'

interface BaseLayoutProps {
    children: React.ReactNode,
    PageTitle: string,
    backgroundStyle?: string,
    altButton?: boolean,
    altLink?: string
}

const Main = styled.main`
    max-width: 80rem;
    margin: auto;
    padding: 0 2rem 13.25rem 2rem;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 0 3rem 13.25rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0 4rem 13.25rem 4rem;
    }
` 

const BaseLayout = ({ children, PageTitle, backgroundStyle = 'blue', altButton = false, altLink } : BaseLayoutProps) => {
    
    // Change background color of navigation according to the page
    const [background, setBackground] = useState(Colors.primary)
    const [isBlue, setIsBlue] = useState(true)

    useEffect(() => {
        if(backgroundStyle === 'accent1') {
            setBackground(Colors.accent1);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent2') {
            setBackground(Colors.accent2);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent3') {
            setBackground(Colors.accent3);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent4') {
            setBackground(Colors.accent4);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent5') {
            setBackground(Colors.accent5);
            setIsBlue(false);
        } else if (backgroundStyle === 'blue') {
            setIsBlue(true);
        }
    }, [backgroundStyle]);

    return (
        <>
            <Header link={altLink} button={altButton} title={PageTitle} backgroundColor={background} />

            <Main>
                { children }
            </Main>

            <Footer blue={isBlue} backgroundColor={background} />
        </>
    )
}

export default BaseLayout;
