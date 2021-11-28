import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../variables'
import { InAgendaItem } from '../../interfaces';

interface DayItemProps {
    content: string,
    inAgendaItem: InAgendaItem[]
}

const StyledLi = styled.li`
    padding: 2rem 0;
    border-bottom: 2px solid ${Colors.primary};
    font-size: 2rem;
    font-weight: 700;

    &:last-of-type {
        border: none;
    }
`

const DayItem = ({ content, inAgendaItem }: DayItemProps) => {

    const familyMembers = inAgendaItem.map( i =>  i.familyMember.firstname).join(',');
    // console.log(familyMembers);
    // const length = inAgendaItem.length;
    return (
        <StyledLi>
            {content}
            <h3>With:</h3>
            {
                familyMembers
            }
            
            {/* {inAgendaItem.foreach(item => {
                return item.familyMember.firstname
            })} */}
        </StyledLi>
    )
}

export default DayItem
