import { useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN, GET_LIKEDPICTURES_BY_FAMILYMEMBER_ID } from '../../graphql/albumItems'
import { InAlbumItemData, LikedPicturesData } from '../../interfaces'
import { Error, Loading } from '../alerts'
import PicturesListItem from './PicturesListItem'

interface PicturesListProps {
    user: string ,
    liked: boolean,
}

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PicturesList: React.FC<PicturesListProps> = ({ user = '', liked = false }) => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    const [ fetchAlbumItemData, { data: dataAlbumItems, loading: loadingAlbumItems, error: errorAlbumItems } ] = useLazyQuery<InAlbumItemData>(GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN);

    const [ fetchLikedPictures , { data: dataLikedPictures, loading: loadingLikedPictures, error: errorLikedPictures } ] = useLazyQuery<LikedPicturesData>(GET_LIKEDPICTURES_BY_FAMILYMEMBER_ID );
    


    useEffect(() => {
        if(liked) {
            fetchLikedPictures({
                variables: {
                    id: parseInt(familyMemberId)
                }
            });
        }
    }, [])

    useEffect(() => {
        if(user) {
            fetchAlbumItemData({
                variables: {
                    id: parseInt(user)
                }
            });
        }
    }, [])

    // Show liked pictures from user OR by familyMemberId
    if(liked) {
        console.log('liked pictures');
        if(loadingLikedPictures) return <Loading/>;
        if(errorLikedPictures) return <Error error={errorLikedPictures.message}/>;
        
        return (
            <StyledUl>
                {dataLikedPictures?.likedPicturesByFamilyMemberId.map((content: any) => <PicturesListItem pics={content} />)}
            </StyledUl>
        )
        
    } else {
        console.log(' pictures by ID', user);
        if(loadingAlbumItems) return <Loading/>;
        if(errorAlbumItems) return <Error error={errorAlbumItems.message}/>;
        
        return (
            <StyledUl>
                {dataAlbumItems?.FamilyMemberInAlbumItemsByFamilyMemberId.map((content: any) => <PicturesListItem pics={content} />)}
            </StyledUl>
        )
    }

}

export default PicturesList
