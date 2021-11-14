import React from 'react';
import DayList from './DayList';
import styled from 'styled-components';

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
    agenda.map(agendaItem => console.log(agendaItem.id))
    return (
        <StyledUl>
            { agenda.map(agendaItem => (
                <DayList test={agendaItem.day} keyId={agendaItem.id} />
            )) }
        </StyledUl>
    )
}

export default AgendaList;
