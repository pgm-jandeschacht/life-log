import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { InAlbumItemData } from '../../interfaces'
import PicturesListItem from './PicturesListItem'
import { GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN } from '../../graphql/albumItems'
import { Loading, Error } from '../alerts'

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PicturesListRecent: React.FC = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    const { data, loading, error } = useQuery<InAlbumItemData >(GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN,{
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading />;
    if(error) return <Error error={error.message}/>;
    
    return (
        <StyledUl>
            {data && data?.FamilyMemberInAlbumItemsByFamilyMemberId.map(albumItem => (
                <PicturesListItem key={albumItem.id} pics={albumItem} />
            ))}
        </StyledUl>
    )
}

export default PicturesListRecent
