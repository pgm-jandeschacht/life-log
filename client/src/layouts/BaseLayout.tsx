import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components/layout'
import { Breakpoint } from '../variables'

interface BaseLayoutProps {
    children: React.ReactNode,
    PageTitle: string,
    backgroundStyle?: string
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

const BaseLayout = ({ children, PageTitle, backgroundStyle = 'blue' } : BaseLayoutProps) => {
    return (
        <>
            <Header title={PageTitle} />

            <Main>
                { children }
            </Main>

            <Footer backgroundColor={backgroundStyle} />
        </>
    )
}

export default BaseLayout;
