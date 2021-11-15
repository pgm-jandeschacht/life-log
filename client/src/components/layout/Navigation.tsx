import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { Colors, Transition, Breakpoint } from '../../variables'
import { ButtonNav } from '../buttons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavigationProps {
    backgroundColorAccent: string,
    setBlue: boolean,
    isForm?: boolean
}

interface StyledDivProps {
    backgroundColor: string,
    buttonColor: boolean,
    hide?: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
    position: fixed;
    bottom: 0;
    display: ${(StyledDivProps) => (StyledDivProps.hide ? "none" : "flex")};
    background: ${(StyledDivProps) => (StyledDivProps.backgroundColor)};
    width: 100%;
    max-width: 80rem;
    padding: 1.5rem 1.5rem;
    border-radius: 20px 20px 0 0;
    padding-bottom: 1rem;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 2rem 3rem;
        padding-bottom: 1.25rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 2rem 4rem;
        padding-bottom: 1.25rem;
    }
    
    a {
        text-align: center;
        margin-right: 1rem;
        width: 33%;
        background: ${(StyledDivProps) => (StyledDivProps.buttonColor ? Colors.secondary : Colors.primary)};
        color: ${(StyledDivProps) => (StyledDivProps.buttonColor ? Colors.primary : Colors.secondary)};
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0.75rem 0;
        border-radius: 10px;
        transition: ${Transition.normal};
        
        @media (min-width: ${Breakpoint.small}) {
            margin-right: 1.5rem;
            padding: 1rem 0;
            font-size: 1.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-right: 2rem;
            padding: 1.25rem 0;
            font-size: 2rem;
        }

        &:hover {
            transform: translateY(-5px);
            background: ${(StyledDivProps) => (StyledDivProps.buttonColor ? Colors.ternary : Colors.secondary)};
            color: ${(StyledDivProps) => (StyledDivProps.buttonColor ? Colors.primary : Colors.primary)};
        }
    }
`

const Navigation = ({ backgroundColorAccent, setBlue, isForm }: NavigationProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }
    
    const handleClosing = (click: boolean) => {
        if (!click) {
            setIsClicked(false);
        }
    }

    return (
        <div>
            <StyledDiv hide={isForm} buttonColor={setBlue} backgroundColor={backgroundColorAccent}>
                <Link to={'/help'} title={'Help'}>Help</Link>

                <ButtonNav onClick={handleClick} backgroundColorButton={backgroundColorAccent} buttonColorButton={setBlue}>
                    Open menu<FontAwesomeIcon icon={faChevronUp} />
                </ButtonNav>
            </StyledDiv>

           <Menu clicked={isClicked} onClose={handleClosing} />
        </div>
    )
}

export default Navigation
