import React from 'react'
import styled from 'styled-components'
import { Breakpoint } from '../../variables'
import PicturesNamesList from './PicturesNamesList'
import { Loading } from '../alerts'
import { GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations';
import { useQuery } from '@apollo/client'
import { FamilyRelationData } from '../../interfaces';

interface PicturesNamesProps {
    users: any
}

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
        }
    }
`

const PicturesNames: React.FC<PicturesNamesProps> = ({ users }) => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    //TODO: only take pictures where hidepicitures !== null --> also add to types
    const { data , loading, error } = useQuery<FamilyRelationData>(GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    return (
        <StyledDiv>
            <h2>I want to see pictures from:</h2>

            <PicturesNamesList usersList={data?.familyRelationsByFamilyMemberId}/>
        </StyledDiv>
    )
}

export default PicturesNames
