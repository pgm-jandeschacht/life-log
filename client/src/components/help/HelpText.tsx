import React from 'react'
import styled from 'styled-components'
import { Breakpoint } from '../../variables'

interface HelpTextProps {
    data: any
}

const StyledText = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.2rem;
        }
    }
`

const HelpText: React.FC<HelpTextProps> = ({ data }) => {
    return (
        <StyledText>
            <h2>{data.title}</h2>

            <p>{data.text}</p>
        </StyledText>
    )
}

export default HelpText
