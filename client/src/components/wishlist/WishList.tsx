import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../variables'
import WishListItem from './WishListItem'

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
    return (
        <StyledUl>
            { wishlist.map((wish, index) => (
                <WishListItem wishContent={wish} keyId={index}/>
            )) }
        </StyledUl>
    )
}

export default WishList
