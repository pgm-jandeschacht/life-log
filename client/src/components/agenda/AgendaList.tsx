import React from 'react';
import DayList from './DayList';
import styled from 'styled-components';

import { useQuery } from "@apollo/client";
import { GET_AGENDAITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';
import { FamilyMemberData } from '../../interfaces';
import _ from 'lodash';


// example object agenda
const agenda = [
    {
        id: 1,
        day: {
            date: "14 November, 2021",
            content: [
                "Max Thomson visited at 2:00 PM",
                "I will have sausage with potatoes and carrots for dinner at 6:00 PM",
            ]
        } 
    },
    {
        id: 2,
        day: {
            date: "15 November, 2021",
            content: [
                "I will have bread with jam for lunch at 12:00 PM",
                "I will play bingo in de common room at 3:00 PM",
                "Karina Cox will visit you at 5:30 PM for her weekly visit",
                "I will have lasagna for dinner at 6:00 PM",
            ]
        } 
    }
]

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
`

const AgendaList = () => {
    // agenda.map(agendaItem => console.log(agendaItem.id))
    
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyMemberData >(GET_AGENDAITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <p>"loading ..."</p>;
    if(error) return <p>"ERRRORRRAAA!!"</p>;
    //data?.familyMemberById.agendaItems
    const agendaItems = data?.familyMemberById.agendaItems || [];
    const sortedAgendaItems = _.sortBy(agendaItems, ['date']);
    const reverseAgenda = sortedAgendaItems.reverse();
    // const sortedAgendaItems = _.groupBy(agendaItems, 'date');
    // console.log(sortedAgendaItems['2021-10-27T18:48:22.281Z'])
    return (
        <StyledUl>
            {  reverseAgenda.map(agendaItem => (
                <DayList test={agendaItem} keyId={agendaItem.id} />
            )) }
            {/* { agenda.map(agendaItem => (
                <DayList test={agendaItem.day} keyId={agendaItem.id} />
            )) } */}
        </StyledUl>
    )
}

export default AgendaList;
