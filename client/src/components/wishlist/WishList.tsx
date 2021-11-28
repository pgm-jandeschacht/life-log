import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../variables'
import WishListItem from './WishListItem';

import { useQuery } from '@apollo/client';
import { GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/wishListItems';
import { FamilyMemberData, WishListItemsData } from '../../interfaces';
import _ from 'lodash';
import { Loading } from '../alerts';

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

const StyledUl = styled.div`
`

const WishList = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<WishListItemsData >(GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>"ERRRORRR!!"</p>;
    const wishListItems = data?.wishListItemsByAuthor || [];
    const sortedWishListItems = (_.sortBy(wishListItems, ['dueDate'])).reverse();

    return (
        <StyledUl>
            { sortedWishListItems.map((wish) => (
                <WishListItem wishContent={wish} keyId={wish.id}/>
            )) }
        </StyledUl>
    )
}

export default WishList
