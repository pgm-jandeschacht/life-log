import React, { useState } from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Transition } from '../../variables'
import WishListItem from './WishListItem';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@apollo/client';
import { GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/wishListItems';
import { FamilyMemberData, WishListItemsData } from '../../interfaces';
import _ from 'lodash';
import { Error, Loading } from '../alerts';

// example object wishlist
const wishlist = [
    {
        for: "Karina Cox",
        content: "Fresh laundry",
        dueDate: "18 November, 2021",
    },
    {
        for: "Lucia Mullen",
        content: "Haribo bears",
        dueDate: "Next time",
    },
    {
        for: "Landyn Foster",
        content: "New batteries",
        dueDate: "As soon as possible",
    }
]

const StyledDiv = styled.div`
    &:first-of-type {
        margin-bottom: 1.5rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 2rem;
        }
    }
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
`

interface StyledButtonProps {
    clicked: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    margin-bottom: 0.75rem;
    font-size: 1.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 0;
    background: ${Colors.white};
    color: ${Colors.primary};
    transition: ${Transition.normal};
    @media (min-width: ${Breakpoint.small}) {
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    span {
        display: flex;
        align-items: center;
        width: 100%;
        &::after {
            content: '';
            width: 100%;
            height: 0.25rem;
            margin: 0 1rem;
            transition: ${Transition.normal};
            background: ${(StyledButtonProps) => (StyledButtonProps.clicked ? Colors.accent5 : Colors.primary)};
            border-radius: 50px;
            @media (min-width: ${Breakpoint.small}) {
                margin: 0 1.25rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                margin: 0 1.5rem;
                height: 0.35rem;
            }
        }
        
    }

    &:hover {
        transform: translateY(-5px);
        span {
            &::after {
                background: ${Colors.accent5};
            }
        }
    }

    svg {
        transition: ${Transition.slow};
        transform: ${(StyledButtonProps) => (StyledButtonProps.clicked ? 'rotate(180deg)' : '')};
    }
`

const WishList: React.FC = () => {
    const [isClickedPending, setIsClickedPending] = useState(true);
    const [isClickedCompleted, setIsClickedCompleted] = useState(false);

    const buttonHandlerPending = () => {
        setIsClickedPending(!isClickedPending)
    }
    const buttonHandlerCompleted = () => {
        setIsClickedCompleted(!isClickedCompleted)
    }


    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<WishListItemsData >(GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;
    const wishListItems = data?.wishListItemsByAuthor || [];
    const sortedWishListItems = (_.sortBy(wishListItems, ['dueDate'])).reverse();

    const pending = sortedWishListItems.filter(item => !item.completed);
    const completed = sortedWishListItems.filter(item => item.completed);

    return (
        <ul>
            <StyledDiv>
                <StyledButton clicked={isClickedPending} onClick={buttonHandlerPending}><span>Pending</span><FontAwesomeIcon icon={faChevronDown} /></StyledButton>
                
                { pending.map((wish) => (
                    <WishListItem toClose={isClickedPending} wishContent={wish} keyId={wish.id}/>
                )) }
            </StyledDiv>

            <StyledDiv>
                <StyledButton clicked={isClickedCompleted} onClick={buttonHandlerCompleted}><span>Completed</span><FontAwesomeIcon icon={faChevronDown} /></StyledButton>
                { completed.map((wish) => (
                    <WishListItem toClose={isClickedCompleted} wishContent={wish} keyId={wish.id}/>
                )) }
            </StyledDiv>
        </ul>
    )
}

export default WishList
