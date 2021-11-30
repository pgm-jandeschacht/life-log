import React from 'react'
import styled from 'styled-components'
import PicturesListItem from './PicturesListItem'

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PicturesListRecent: React.FC = () => {
    return (
        <StyledUl>
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
            <PicturesListItem />
        </StyledUl>
    )
}

export default PicturesListRecent
