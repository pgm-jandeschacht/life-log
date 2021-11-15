import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

interface FooterProps {
    backgroundColor: string,
    blue: boolean,
    form?: boolean
}

const StyledFooter = styled.footer`
    max-width: 80rem;
    margin: auto;
`

const Footer = ({ backgroundColor, blue, form }: FooterProps) => {
    return (
        <StyledFooter>
            <Navigation isForm={form} setBlue={blue} backgroundColorAccent={backgroundColor}/>
        </StyledFooter>
    )
}

export default Footer
