import React from 'react'
import styled from 'styled-components'
import { Breakpoint } from '../../variables'

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`


const FollowedPeople: React.FC = () => {
    return (
        <StyledDiv>
            <h2>Choose which people to follow</h2>
        </StyledDiv>
    )
}

export default FollowedPeople
