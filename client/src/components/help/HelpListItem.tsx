import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Breakpoint, Shadow, Transition } from '../../variables';

interface HelpListItemProps {
    title: string,
    keyId: number,
    image: IconDefinition,
    color: string
}

interface StyledLiProps {
    background: string
}

const StyledLi = styled.li<StyledLiProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        width: calc(50% - 0.75rem);
    }

    &:nth-of-type(odd) {
        @media (min-width: ${Breakpoint.large}) {
            margin-right: 1.5rem;
        }
    }
    
    a {
        box-shadow: ${Shadow.small};
        border-radius: 10px;
        background: ${(StyledLiProps) => StyledLiProps.background};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* max-height: 12rem; */
        padding: 1.2rem 1.5rem;
        font-size: 1.5rem ;
        font-weight: 900;
        transition: ${Transition.normal};
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem ;
            padding: 1.5rem 2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem ;
            max-height: 12rem;
            padding: 2rem 2.5rem;
        }
        
        &:hover {
            box-shadow: ${Shadow.medium};
            transform: translateY(-5px) scale(1.02);
        }
    }
    `

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    
    p {
        font-size: 1.5rem ;
        margin-left: 2rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-left: 3rem;
            font-size: 2rem ;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-left: 4rem;
            font-size: 3rem ;
        }
    }
    
    svg {
        width: 15% !important;
        height: 2rem;
        @media (min-width: ${Breakpoint.small}) {
            width: 20% !important;
            height: 4rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            width: 30% !important;
            height: 12rem;
        }
    }
`

const HelpListItem: React.FC<HelpListItemProps> = ({ title, keyId, image, color }) => {
    return (
        <StyledLi background={color}>
            <a href="/help">
                <StyledDiv>
                    <FontAwesomeIcon icon={image}/>

                    <p>{title}</p>
                </StyledDiv>

                <FontAwesomeIcon icon={faChevronRight}/>
            </a>
        </StyledLi>
    )
}

export default HelpListItem
