import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components/layout'

interface BaseLayoutProps {
    children: React.ReactNode,
    PageTitle: string,
    backgroundStyle?: string
}

const Main = styled.main`
    background: grey;
    margin: 0 4rem 13.25rem 4rem;
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
