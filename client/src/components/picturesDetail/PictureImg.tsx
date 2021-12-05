import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import vacationImg from '../../assets/images/vacation.jpg'
import { GET_ALBUMITEM_BY_ID } from '../../graphql/albumItems'
import { AlbumItemData } from '../../interfaces'
import { Breakpoint } from '../../variables'
import { Loading, Error } from '../alerts'

const StyledImg = styled.div`
    width: 100%;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: 10px;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    margin-bottom: 1.5rem;
    
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 0;
        padding-bottom: 50%;
        width: 50%;
    }

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const PictureImg: React.FC = ( ) => {
    const { userId } = useParams<{ userId: any }>();

    const { data, loading, error } = useQuery<AlbumItemData >(GET_ALBUMITEM_BY_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    if(loading) return <Loading />;
    if(error) return <Error error={error.message}/>;

    return (
        <StyledImg >
            <img src={data?.albumItem.image} alt="On Vacation" />
        </StyledImg>
    )
}

export default PictureImg
