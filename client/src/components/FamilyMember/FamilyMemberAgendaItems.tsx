import React, { ReactElement } from 'react';

import { GET_AGENDAITEMS_BY_FAMILYMEMBER_ID } from "../../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../../interfaces";

import { useQuery, useLazyQuery } from "@apollo/client";
import { Error, Loading } from '../alerts';

interface FamilyMemberAgendaItemsProps {
    
}

function FamilyMemberAgendaItems({}: FamilyMemberAgendaItemsProps): ReactElement {

    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyMemberData >(GET_AGENDAITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });
    console.log(data);

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;
    return (
    <>
        <ul>
            {data?.familyMemberById?.agendaItems?.map(agendaItem => (
                <li key={agendaItem.id}>
                    {agendaItem.title}
                    {agendaItem.date}
                </li>
            ))}
        </ul>

    </>
    )
}

export default FamilyMemberAgendaItems;
