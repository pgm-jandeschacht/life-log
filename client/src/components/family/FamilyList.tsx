import React from 'react'
import styled from 'styled-components'
import { Breakpoint } from '../../variables'
import { Loading } from '../alerts'
import FamilyListItem from './FamilyListItem'

import { useQuery } from "@apollo/client";
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';

import { FamilyRelationData, FamilyRelation } from '../../interfaces';

interface FamilyListProps {
    // profiles: any
}

const StyledUl = styled.ul`
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
    }
`

const FamilyList: React.FC<FamilyListProps> = ( ) => {

    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyRelationData>(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    })

    if(loading) return <Loading/>;
    if(error) return <p>"ERRRORRR!!"</p>;


    return (
        <StyledUl>
            { data?.familyRelationsByFamilyMemberId.map((familyRelation: FamilyRelation) => (
                <FamilyListItem familyMember={familyRelation} />
            )) }
        </StyledUl>
    )
}

export default FamilyList
