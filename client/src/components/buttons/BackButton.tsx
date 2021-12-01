import React from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Breakpoint, Colors, Transition } from '../../variables';

interface BackButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    hide?: boolean,
    background?: string,
}

interface StyledButtonProps {
    hidden?: boolean,
    color?: string
}

const StyledButton = styled.button<StyledButtonProps>`
    color: ${Colors.primary};
    background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? StyledButtonProps.color : Colors.primary)};
    display: ${(StyledButtonProps) => (StyledButtonProps.hidden ? 'flex' : 'none')};
    align-items: center;
    border-radius: 50px;
    font-weight: 700;
    position: relative;
    transition: ${Transition.normal};
    overflow: hidden;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0.75rem 1.5rem;
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.75rem;
        padding: 0.6rem 1.2rem;
        margin-right: 1.5rem;
        margin-top: 0.4rem;
        margin-bottom: 0;
    }
    
    div {
        background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? StyledButtonProps.color : Colors.primary)};
    }
    
    &:hover {
        transform: translateY(-5px);
        color: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? StyledButtonProps.color : Colors.primary)};
        background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? Colors.primary : Colors.secondary)};
        div {
            background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? Colors.primary : Colors.secondary)};
        }
        @media (min-width: ${Breakpoint.large}) {
            transform: none;
            div:first-of-type {
                margin-right: 5.4rem;
            }
            div:last-of-type {
                left: 3.5rem;
                opacity: 100;
            }
        }
    }
`

const StyledSvg = styled.div`
    transition: ${Transition.normal};
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    margin-right: 0.75rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-right: 1rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-right: 1.25rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-right: 0;
    }
`

const StyledDiv = styled.div`
    position: relative;
    opacity: 100;
    transition: ${Transition.normal};
    left: 0;
    display: flex;
    align-items: center;
    @media (min-width: ${Breakpoint.large}) {
        left: 2rem;
        position: absolute;
        opacity: 0;
    }
`

const BackButton: React.FC<BackButtonProps> = ({ onClick, hide, background }) => {
    return (
        <StyledButton title="Go to the previous page" color={background} hidden={hide} onClick={onClick}>
            <StyledSvg>
                <FontAwesomeIcon icon={faChevronLeft} />
            </StyledSvg>

            <StyledDiv>
                <p>back</p>
            </StyledDiv>
        </StyledButton>
    )
}

export default BackButton
