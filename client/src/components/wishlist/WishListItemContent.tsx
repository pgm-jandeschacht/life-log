import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'

interface WishListItemContentProps {
    clicked: boolean,
    wish: any
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

        button {
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
    return (
        <StyledDiv expand={clicked}>
            I want
            <span>{wish.for}</span>
            to bring me
            <span>{wish.content}</span>
            when they visit me
            <span>{wish.dueDate}</span>

            <div>
                <button>
                    Delete Wish
                </button>
                <button>
                    Edit Wish
                </button>
            </div>
        </StyledDiv>
    )
}

export default WishListItemContent
