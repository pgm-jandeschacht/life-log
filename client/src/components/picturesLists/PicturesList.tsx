import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN } from '../../graphql/albumItems'
import { InAlbumItemData } from '../../interfaces'
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
    const { data, loading, error } = useQuery<InAlbumItemData>(GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN, {
        variables: {
            id: parseInt(user)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;
    console.log(data?.FamilyMemberInAlbumItemsByFamilyMemberId)

    return (
        <StyledUl>
            {data?.FamilyMemberInAlbumItemsByFamilyMemberId.map((content: any) => 
                <PicturesListItem pics={content}/>
            )}
        </StyledUl>
    )
}

export default PicturesList
