import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import { InWishListItem, WishListItemType } from '../../interfaces';

interface WishListItemContentProps {
    clicked: boolean,
    wish: WishListItemType
}

interface StyledDivProps {
    expand: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
    display: ${(StyledDivProps) => (StyledDivProps.expand ? 'block' : 'none')};
    padding: 2rem;
    font-size: 2rem;
    font-weight: 600;

    span {
        font-weight: 900;
        font-size: 4rem;
        display: block;
        margin: 1.5rem 0;

        &:last-of-type {
            margin-bottom: 3rem;
        }
    }

    div {
        display: flex;
        width: 100%;

        a {
            background: ${Colors.ternary};
            color: ${Colors.primary};
            box-shadow: ${Shadow.small};
            border-radius: 10px;
            border: none;
            font-size: 2rem;
            font-weight: 900;
            padding: 1.5rem 2.5rem;
            cursor: pointer;
            transition: ${Transition.normal};
            width: 100%;
            margin-right: 1rem;
            text-align: center;
            
            &:last-of-type {
                background: ${Colors.accent5};
                margin-right: 0;
                margin-left: 1rem;

                &:hover {
                    background: ${Colors.primary};
                    color: ${Colors.accent5};
                }
            }

            &:hover {
                background: ${Colors.primary};
                color: ${Colors.secondary};
            }
        }
    }
`

const WishListItemContent: React.FC<WishListItemContentProps> = ({ clicked, wish }) => {
    //TODO: add completed yes/no?

    let visitDate = '';
    if(wish.dueDate !== null) {
        visitDate = 'on the: ' +  wish.dueDate;
    } else {
        visitDate = 'next time';
    }

    // create list of involved familymembers
    let inWishList:string = '';
    if(wish.inWishListItem.length > 0) {
        inWishList = wish.inWishListItem.map(inWish => inWish.familyMember.firstname).join(' or ');
    }
    
    const handleClicking = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    }

    return (
        <StyledDiv expand={clicked}>
            I want
            {/* <span>{wish.for}</span> */}
            <span>{inWishList}</span>
            to bring me
            <span>{wish.content}</span>
            when they visit me
            <span>{visitDate}</span>

            <div>
                <a onClick={handleClicking} href="/">
                    Delete Wish
                </a>
                <a href="my-wishlist/edit">
                    Edit Wish
                </a>
            </div>
        </StyledDiv>
    )
}

export default WishListItemContent
