import React, { useState } from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import WishListItemContent from './WishListItemContent'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WishListItemProps {
    wishContent: any,
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
    `

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    background: ${Colors.accent5};
    border-radius: 10px;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 900;
    color: ${Colors.primary};

    svg {
        transition: ${Transition.slow};
        transform: ${(StyledButtonProps) => (StyledButtonProps.rotate ? 'rotate(180deg)' : '')};
    }
`

const WishListItem: React.FC<WishListItemProps> = ({ wishContent, keyId }) => {
    const [isClicked, setIsClicked] = useState(false)

    const buttonHandler = () => {
        setIsClicked(!isClicked)
    }

    console.log(wishContent)

    return (
        <StyledLi key={keyId}>
        {/* <StyledLi key={`wish${keyId}`}> */}
            <StyledButton rotate={isClicked} onClick={buttonHandler}>
                {wishContent.content}

                <FontAwesomeIcon icon={faChevronDown} />
            </StyledButton>

            <WishListItemContent wish={wishContent} clicked={isClicked}/>
        </StyledLi>
    )
}

export default WishListItem
