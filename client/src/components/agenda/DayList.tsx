import React from 'react';
import styled from 'styled-components';
import DayItem from './DayItem';

interface Props {
    
}

const StyledLi = styled.li`
    width: 100%;
    background: black;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`

const DayList = (props: Props) => {
    return (
        <StyledLi>
            <ul>
                <DayItem/>
                <DayItem/>
                <DayItem/>
                <DayItem/>
                <DayItem/>
                <DayItem/>
            </ul>
        </StyledLi>
    )
}

export default DayList
