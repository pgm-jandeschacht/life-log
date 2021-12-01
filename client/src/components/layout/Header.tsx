import React from 'react';
import styled from 'styled-components';
import { Breakpoint, Colors, Transition } from '../../variables';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon, BackButton } from '../buttons';
import { useHistory } from 'react-router-dom'

interface headerProps {
    title: string,
    button: boolean,
    backgroundColor: string,
    link?: string,
    form?: boolean,
    back?: boolean,
}

interface HeaderProps {
    background: string,
    hide?: boolean,
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
    @media (min-width: ${Breakpoint.large}) {
        padding: 3rem 4rem;
    }

    div {
        @media (min-width: ${Breakpoint.large}) {
            display: flex;
            align-items: center;
        }

        h1 {
            font-weight: 900;
            font-size: ${(HeaderProps) => ((HeaderProps.hide) ? 2 : 2.5)}rem;
            
            @media (min-width: ${Breakpoint.small}) {
                font-size: ${(HeaderProps) => ((HeaderProps.hide) ? 2.5 : 3)}rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: ${(HeaderProps) => ((HeaderProps.hide) ? 3.25 : 4)}rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: ${(HeaderProps) => ((HeaderProps.hide) ? 2.5 : 3)}rem;
            }
        }
    }


    a {
        background: ${(HeaderProps) => HeaderProps.background};
        padding: 0.515rem 0.625rem;
        border-radius: 50%;
        transition: ${Transition.normal};
        border: 4px solid transparent;
        @media (min-width: ${Breakpoint.small}) {
            padding: 0.64rem 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 0.89rem 1rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 0.64rem 0.75rem;
        }

        svg {
            transition: ${Transition.normal};
            width: 1.3rem !important;
            height: auto;
            @media (min-width: ${Breakpoint.small}) {
                width: 1.5rem !important;
            }
            @media (min-width: ${Breakpoint.medium}) {
                width: 2rem !important;
            }
            @media (min-width: ${Breakpoint.large}) {
                width: 1.5rem !important;
            }
        }

        &:hover {
            background: ${Colors.primary};
            border-color: ${(HeaderProps) => HeaderProps.background};

            svg {
                color: ${(HeaderProps) => HeaderProps.background};;
            }
        }
    }
`

const Header = ({ title, button, backgroundColor, link, form, back }: headerProps) => {
    const history = useHistory();
    const handleClicking = () => {
        history.goBack();
    }
    return (
        <StyledHeader hide={form} background={backgroundColor}>

            <div>
                <BackButton background={backgroundColor} hide={back} onClick={handleClicking}/>
                
                <h1>
                    {title}
                </h1>
            </div>

            { (form) ? <ButtonIcon background={backgroundColor} onClick={handleClicking} ><FontAwesomeIcon icon={faTimes} /></ButtonIcon> : '' }

            { (button && link !== undefined) ? <Link to={link} title="Add item to agenda"><FontAwesomeIcon icon={faPlus} /></Link> : '' }
        </StyledHeader>
    )
}

export default Header
