import React from 'react';
import styled from 'styled-components';
import { Breakpoint, Colors, Transition } from '../../variables';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface headerProps {
    title: string,
    button: boolean,
    backgroundColor: string,
    link?: string
}

interface HeaderProps {
    background: string
}

const StyledHeader = styled.header<HeaderProps>`
    padding: 2.5rem 2rem;
    max-width: 80rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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

    a {
        background: ${(HeaderProps) => HeaderProps.background};
        padding: 1.1rem 1.25rem;
        border-radius: 50%;
        transition: ${Transition.normal};

        svg {
            transition: ${Transition.normal};
            width: 2rem !important;
            height: auto;
        }

        &:hover {
            background: ${Colors.primary};

            svg {
                color: ${(HeaderProps) => HeaderProps.background};;
            }
        }
    }
`

const Header = ({ title, button, backgroundColor, link }: headerProps) => {
    return (
        <StyledHeader background={backgroundColor}>
            <h1>
                {title}
            </h1>

            { (button && link !== undefined) ? <Link to={link} title="Add item to agenda"><FontAwesomeIcon icon={faPlus} /></Link> : '' }
        </StyledHeader>
    )
}

export default Header
