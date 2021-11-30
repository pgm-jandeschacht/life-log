import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { GET_ALBUMITEMS } from '../../graphql/albumItems'
import { AlbumItemData } from '../../interfaces'
import { Loading } from '../alerts'
import PicturesListItem from './PicturesListItem'

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PicturesListRecent: React.FC = () => {
    const { data, loading, error } = useQuery<AlbumItemData>(GET_ALBUMITEMS, {});

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    console.log(data)

    return (
        <StyledUl>
            {data?.albumItems.map(picture => 
                <PicturesListItem />
            )}
            {/* <PicturesListItem />
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
            <PicturesListItem /> */}
        </StyledUl>
    )
}

export default PicturesListRecent
