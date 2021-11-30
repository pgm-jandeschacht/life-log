import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { GET_ALBUMITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/albumItems'
import { AlbumItemData } from '../../interfaces'
import { Loading } from '../alerts'
import PicturesListItem from './PicturesListItem'

interface PicturesListProps {
    user: string
}

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PicturesList: React.FC<PicturesListProps> = ({ user }) => {
    const { data, loading, error } = useQuery<AlbumItemData>(GET_ALBUMITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(user)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    return (
        <StyledUl>
            {data?.albumItemsByAuthor.map(picture => 
                <PicturesListItem pic={picture}/>
            )}
        </StyledUl>
    )
}

export default PicturesList
