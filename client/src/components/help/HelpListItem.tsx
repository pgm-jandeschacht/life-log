import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Shadow, Transition } from '../../variables';

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
    display: flex;
    margin-bottom: 1.5rem;
    
    a {
        box-shadow: ${Shadow.small};
        border-radius: 10px;
        background: ${(StyledLiProps) => StyledLiProps.background};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-height: 12rem;
        padding: 2rem 2.5rem;
        font-size: 2.5rem ;
        font-weight: 900;
        transition: ${Transition.normal};
        
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
        font-size: 3rem ;
        margin-left: 4rem;
    }

    svg {
        width: 30% !important;
        height: 12rem;
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
