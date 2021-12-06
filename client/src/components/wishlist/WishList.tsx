import React, { useState } from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import WishListItem from './WishListItem';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@apollo/client';
import { GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/wishListItems';
import { WishListItemsData } from '../../interfaces';
import _ from 'lodash';
import { Error, Loading } from '../alerts';
import { Link } from 'react-router-dom';

interface WishListProps {
    isHome?: boolean
}

interface StyledDivProps {
    noMargin?: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
    &:first-of-type {
        margin-bottom: ${(StyledDivProps) => StyledDivProps.noMargin ? 0 : '1.5rem'};
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: ${(StyledDivProps) => StyledDivProps.noMargin ? 0 : '2rem'};
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: ${(StyledDivProps) => StyledDivProps.noMargin ? 0 : '2.5rem'};
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: ${(StyledDivProps) => StyledDivProps.noMargin ? 0 : '2rem'};
        }
    }
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
`

interface StyledButtonProps {
    clicked: boolean,
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

const StyledAnchor = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    @media (min-width: ${Breakpoint.medium}) {
        margin-top: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin: auto;
        margin-top: 1.5rem;
    }
    
    a {
        background: ${Colors.accent5 };
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.6rem 1.2rem;
        border-radius: 10px;
        transition: ${Transition.normal};
        box-shadow: ${Shadow.small};
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 1.75rem;
            padding: 1rem 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }

        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent5};
            box-shadow: ${Shadow.large};
        }
    }
`

const WishList: React.FC<WishListProps> = ({isHome}) => {
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
            <StyledDiv noMargin={isHome}>
                {
                    isHome ? '' : 
                    <StyledButton clicked={isClickedPending} onClick={buttonHandlerPending}><span>Pending</span><FontAwesomeIcon icon={faChevronDown} /></StyledButton>
                }
                
                { pending.map((wish, index) => (
                    isHome && index > 3 ? '' :
                    <WishListItem greyBg={isHome} toClose={isClickedPending} wishContent={wish} keyId={wish.id}/>
                )) }
            </StyledDiv>

            {
                isHome ? '' :
                <StyledDiv>
                    <StyledButton clicked={isClickedCompleted} onClick={buttonHandlerCompleted}><span>Completed</span><FontAwesomeIcon icon={faChevronDown} /></StyledButton>
                    
                    { completed.map((wish) => (
                        <WishListItem toClose={isClickedCompleted} wishContent={wish} keyId={wish.id}/>
                    )) }
                </StyledDiv>
            }

            {
                isHome ? 
                <StyledAnchor>
                    <Link to={"/my-wishlist/"} title={"My wishlist"}>See all wishes</Link>
                </StyledAnchor>
                : ''
            }
        </ul>
    )
}

export default WishList
