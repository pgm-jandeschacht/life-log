import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../variables'

interface DayItemProps {
    content: string
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

const DayItem = ({ content }: DayItemProps) => {
    return (
        <StyledLi>
            {content}
        </StyledLi>
    )
}

export default DayItem
