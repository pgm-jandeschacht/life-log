import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components/layout'

interface BaseLayoutProps {
    children: React.ReactNode,
}

const Main = styled.main`
    background: grey
`

const BaseLayout = ({children} : BaseLayoutProps) => {
    return (
        <>
            <Header />

            <Main>
                { children }
            </Main>

            <Footer />
        </>
    )
}

export default BaseLayout
