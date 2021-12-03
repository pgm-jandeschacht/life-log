import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DayItem from './DayItem';
import { Breakpoint, Colors, Shadow } from '../../variables'
import { render } from '@testing-library/react';
import { transformDate } from '../../services/transform/date'

interface DayListProps {
    keyId: number | string,
    test: any,
}

const StyledLi = styled.li`
    width: 100%;
    background: ${Colors.secondary};
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1.5rem;
        width: calc(50% - 0.75rem);
    }

    &:nth-of-type(odd) {
        margin-right: 1.5rem;
    }

    ul {
        padding: 0 1rem;
        @media (min-width: ${Breakpoint.small}) {
            padding: 0 1.3rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 0 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 0 1.3rem;
        }
    }
`

interface StyledDayTitleProps {
    today: boolean
}

const StyledDayTitle = styled.div<StyledDayTitleProps>`
    padding: 0.75rem 1.2rem;
    background: ${(StyledDayTitleProps) => (StyledDayTitleProps.today ? Colors.primary : Colors.accent3)};
    color: ${(StyledDayTitleProps) => (StyledDayTitleProps.today ? Colors.secondary : Colors.primary)};
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    @media (min-width: ${Breakpoint.small}) {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 1rem 2rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
    }
`

const DayList: React.FC<DayListProps> = ({ keyId, test }) => {
    const [isToday, setIsToday] = useState(false)
    const date = transformDate(test.date).split(" ", 1);
    useEffect(() => {
        (date[0].toLocaleLowerCase() === 'today' ? setIsToday(true) : setIsToday(false));
    });
    return (
        <StyledLi key={`day${keyId}`}>
            <StyledDayTitle id={(isToday ? 'today' : '')} today={isToday}>
                <p>
                    {/* { beautifyDob(test.date) } */}
                    { transformDate(test.date) }
                </p>
            </StyledDayTitle>

            <ul>

                <DayItem content={test.content} inAgendaItem ={test.inAgendaItem} />
                {/* { test.content.map((testItem: string)=> (
                     <DayItem content={testItem}/>
                )) } */}
            </ul>
        </StyledLi>
    )
}

export default DayList
