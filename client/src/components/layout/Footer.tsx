import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

interface FooterProps {
    backgroundColor: string
}

const StyledFooter = styled.footer`
    max-width: 80rem;
    margin: auto;
`

const Footer = ({ backgroundColor }: FooterProps) => {
    return (
        <StyledFooter>
            <Navigation backgroundColorStyle={backgroundColor}/>
        </StyledFooter>
    )
}

export default Footer
