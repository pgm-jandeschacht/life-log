import React, { useState } from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import WishListItemContent from './WishListItemContent'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WishListItemType } from '../../interfaces';

interface WishListItemProps {
    wishContent: WishListItemType,
    keyId: number
}

interface StyledButtonProps {
    rotate: boolean
}

const StyledLi = styled.li`
    background: ${Colors.secondary};
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    @media (min-width: ${Breakpoint.large}) {
        width: calc(50% - 0.75rem);

        &:nth-of-type(odd) {
            margin-right: 1.5rem;
        }
    }
`

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    background: ${Colors.accent5};
    border-radius: 10px;
    padding: 0.75rem 1.2rem;
    font-size: 1.3rem;
    font-weight: 900;
    color: ${Colors.primary};
    @media (min-width: ${Breakpoint.small}) {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 1rem 2rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
    }

    svg {
        transition: ${Transition.slow};
        transform: ${(StyledButtonProps) => (StyledButtonProps.rotate ? 'rotate(180deg)' : '')};
        margin-left: 1rem;
        @media (min-width: ${Breakpoint.medium}) {
            margin-left: 1.5rem;
            
        }
    }
`

const WishListItem: React.FC<WishListItemProps> = ({ wishContent, keyId }) => {
    const [isClicked, setIsClicked] = useState(false)

    const buttonHandler = () => {
        setIsClicked(!isClicked)
    }

    // console.log(wishContent)

    return (
        <StyledLi key={keyId}>
            <StyledButton rotate={isClicked} onClick={buttonHandler}>
                {wishContent.content}

                <FontAwesomeIcon icon={faChevronDown} />
            </StyledButton>

            <WishListItemContent wish={wishContent} clicked={isClicked}/>
        </StyledLi>
    )
}

export default WishListItem
