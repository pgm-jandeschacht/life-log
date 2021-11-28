import React from 'react'
import styled from 'styled-components'
import { Breakpoint } from '../../variables'
import PicturesNamesList from './PicturesNamesList'

interface PicturesNamesProps {
    users: any
}

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 900;
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
`

const PicturesNames: React.FC<PicturesNamesProps> = ({ users }) => {
    return (
        <StyledDiv>
            <h2>I want to see pictures from:</h2>

            <PicturesNamesList usersList={users}/>
        </StyledDiv>
    )
}

export default PicturesNames
