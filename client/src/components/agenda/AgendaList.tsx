import React from 'react';
import DayList from './DayList';
import styled from 'styled-components';

interface Props {
    
}

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
`

const AgendaList = (props: Props) => {
    return (
        <StyledUl>
            <DayList/>
            <DayList/>
            <DayList/>
            <DayList/>
        </StyledUl>
    )
}

export default AgendaList;
