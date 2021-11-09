import React from 'react';
import styled from 'styled-components';

interface headerProps {
    title: string
}

const StyledHeader = styled.header`
    padding: 5rem 4rem;
    
    h1 {
        font-size: 4rem;
        font-weight: 900;
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
