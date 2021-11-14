import React, { ReactElement } from 'react';

import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../../interfaces";

import { useQuery, useLazyQuery } from "@apollo/client";

interface FamilyMemberInfoProps {
    
}

function FamilyMemberInfo({}: FamilyMemberInfoProps): ReactElement {

    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyMemberData >(GET_FAMILYMEMBER_BY_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <p>"loading ..."</p>;
    if(error) return <p>"ERRRORRRAAA!!"</p>;
    console.log(data);
    return (
    <>
        <p>Firstname: {data?.familyMemberById.firstname}</p>
        <p>Lastname: {data?.familyMemberById.lastname}</p>
        <p>Gender: {data?.familyMemberById.gender}</p>
        <p>Alive? {data?.familyMemberById.isAlive}</p>
        <p>Bio: {data?.familyMemberById.bio}</p>

    </>
    )
}

export default FamilyMemberInfo
