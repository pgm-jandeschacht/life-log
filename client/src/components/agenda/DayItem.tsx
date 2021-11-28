import React from 'react'
import styled from 'styled-components'
import { Colors, Breakpoint } from '../../variables'

interface DayItemProps {
    content: string
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

const DayItem: React.FC<DayItemProps> = ({ content }) => {
    return (
        <StyledLi>
            {content}
        </StyledLi>
    )
}

export default DayItem
