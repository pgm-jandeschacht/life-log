import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../variables';

interface headerProps {
    title: string
}

const StyledHeader = styled.header`
    padding: 2.5rem 2rem;
    max-width: 80rem;
    margin: auto;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 4rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 5rem 4rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
        
        @media (min-width: ${Breakpoint.small}) {
            font-size: 3rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 4rem;
        }
    }
`

const Header = ({ title }: headerProps) => {
    return (
        <StyledHeader>
            <h1>
                {title}
            </h1>
        </StyledHeader>
    )
}

export default Header
