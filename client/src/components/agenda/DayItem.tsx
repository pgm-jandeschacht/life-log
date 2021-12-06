import React from 'react'
import styled from 'styled-components'
import { Colors, Breakpoint, Transition } from '../../variables'
import { InAgendaItem } from '../../interfaces';

interface DayItemProps {
    content: string,
    inAgendaItem: InAgendaItem[]
}

const StyledLi = styled.li`
    padding: 1rem 0;
    border-bottom: 2px solid ${Colors.primary};
    font-size: 1.3rem;
    font-weight: 700;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.5rem;
        padding: 1.3rem 0;
    }
    @media (min-width: ${Breakpoint.medium}) {
        font-size: 2rem;
        padding: 2rem 0;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.5rem;
        padding: 1.3rem 0;
    }

    &:last-of-type {
        border: none;
    }
`

const StyledDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${Breakpoint.medium}) {
        margin-top: 1.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-top: 1rem;
    }

    a {
        background: ${Colors.ternary};
        color: ${Colors.primary};
        padding: 0.5rem 1rem;
        padding-bottom: 0.25rem;
        border-radius: 10px;
        margin-right: 0.75rem;
        margin-bottom: 0.75rem;
        transition: ${Transition.normal};
        @media (min-width: ${Breakpoint.small}) {
            padding: 0.6rem 1.2rem;
            padding-bottom: 0.45rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 0.75rem 1.5rem;
            padding-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 0.6rem 1.2rem;
            padding-bottom: 0.45rem;
        }

        &:last-of-type {
            margin-right: 0;
        }

        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.secondary};
        }
    }
`

const DayItem: React.FC<DayItemProps> = ({ content, inAgendaItem }) => {
    const familyMembers = inAgendaItem.map( i =>  <a href={`/my-family/${i.familyMember.id}`}>{i.familyMember.firstname}</a>);
    
    return (
        <StyledLi>
            <p>
                {content}
            </p>
            
            <StyledDiv>
                {familyMembers}
            </StyledDiv>
        </StyledLi>
    )
}

export default DayItem
