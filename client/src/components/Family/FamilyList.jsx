import React from 'react';
import styled from 'styled-components';

import { useQuery } from "@apollo/client";
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';

// import { FamilyRelationsssssssData } from '../../interfaces';

import { FamilyRelationData } from '../../interfaces';

import _ from 'lodash';


const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
`

const FamilyList = () => {
    // agenda.map(agendaItem => console.log(agendaItem.id))
    
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    // const { data, loading, error } = useQuery<FamilyRelationData >(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
    const { data, loading, error } = useQuery(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    })

    if(loading) return <p>"loading ..."</p>;
    if(error) return <p>"ERRRORRR!!"</p>;
    
    return (
        <StyledUl>
            <ul>
            {  data.familyRelationsByFamilyMemberId.map(familyRelation => (
                <li key={familyRelation.id}>
                    <span>
                        { familyRelation.relationType.name}:
                        <br/>
                    </span>
                    <span>
                        {familyRelation.relatedFamilyMember.firstname} {familyRelation.relatedFamilyMember.lastname}
                    </span>
                    <br/>
                </li>
            )) }
            </ul>
        </StyledUl>
    )
}

export default FamilyList;
