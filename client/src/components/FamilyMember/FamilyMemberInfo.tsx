import React, { ReactElement } from 'react';

import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID, GET_FAMILYMEMBERINFO_BY_ID } from "../../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../../interfaces";

import { useQuery, useLazyQuery } from "@apollo/client";
import { Error, Loading } from '../alerts';

interface FamilyMemberInfoProps {
    
}

function getMomentOfDay(date: Date): string {
    const hours = date.getHours();
    if(hours < 12) return "good morning";
    if(hours < 18) return "good afternoon";
    return "good evening";
}

function FamilyMemberInfo({}: FamilyMemberInfoProps): ReactElement {
    const today =  new Date();
    const momentOfDay = getMomentOfDay(today);

    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyMemberData >(GET_FAMILYMEMBERINFO_BY_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;
    console.log(data);
    return (
    <>
        <p>Date: { today.toLocaleDateString() }</p>
        <p>WEATHER</p>
        <p>{ momentOfDay }</p>
        <p>{data?.familyMemberById.firstname}</p>
        {/* <p>Lastname: {data?.familyMemberById.lastname}</p> */}
        {/* <p>Gender: {data?.familyMemberById.gender}</p> */}
        {/* <p>Alive? {data?.familyMemberById.isAlive}</p> */}
        {/* <p>Bio: {data?.familyMemberById.bio}</p> */}
        
        {/* url is bad, maybe upload to own server? */}
        <img src={ data?.familyMemberById.image } alt="" />

    </>
    )
}

export default FamilyMemberInfo
