import React from 'react';
import styled from 'styled-components';
import DayItem from './DayItem';
import { Colors, Shadow } from '../../variables'
import { render } from '@testing-library/react';

interface DayListProps {
    keyId: number | string,
    test: any,
}

const StyledLi = styled.li`
    width: 100%;
    background: ${Colors.secondary};
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: ${Shadow.small};

    ul {
        padding: 0 2rem;
    }
`

const StyledDayTitle = styled.div`
    padding: 1rem 2rem;
    background: ${Colors.accent3};
    border-radius: 10px;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`

const DayList = ({ keyId, test }: DayListProps) => {
    //  console.log(test);
    return (
        <StyledLi key={`day${keyId}`}>
            <StyledDayTitle>
                <p>
                    {new Date(test.date).toLocaleDateString()}
                    {/* { test.date } */}
                </p>
            </StyledDayTitle>

            <ul>

                <DayItem content={test.title}/>
                {/* { test.content.map((testItem: string)=> (
                     <DayItem content={testItem}/>
                )) } */}
            </ul>
        </StyledLi>
    )
}

export default DayList
