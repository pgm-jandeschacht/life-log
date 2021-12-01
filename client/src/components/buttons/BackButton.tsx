import React from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Colors, Transition } from '../../variables';

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
    margin-right: 1.5rem;
    margin-top: 0.5rem;
    /* background: ${Colors.accent2}; */
    background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? StyledButtonProps.color : Colors.primary)};
    display: ${(StyledButtonProps) => (StyledButtonProps.hidden ? 'flex' : 'none')};
    align-items: center;
    font-size: 1.75rem;
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    font-weight: 700;
    position: relative;
    transition: ${Transition.normal};
    overflow: hidden;
    
    div:first-of-type {
        background: ${(StyledButtonProps) => (StyledButtonProps.color !== undefined ? StyledButtonProps.color : Colors.primary)};
    }

    &:hover {
        div:first-of-type {
            margin-right: 5.18rem;
        }
        div:last-of-type {
            opacity: 1000;
            left: 3.3rem;
        }
    }
`

const StyledSvg = styled.div`
    margin-right: 0;
    transition: ${Transition.normal};
    position: relative;
    z-index: 1;
`

const StyledDiv = styled.div`
    position: absolute;
    opacity: 0;
    transition: ${Transition.normal};
    left: 2rem;

`

const BackButton: React.FC<BackButtonProps> = ({ onClick, hide, background }) => {
    return (
        <StyledButton color={background} hidden={hide} onClick={onClick}>
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
