import React from 'react'
import styled from 'styled-components'
import PicturesNamesList from './PicturesNamesList'

interface PicturesNamesProps {
    users: any
}

const StyledDiv = styled.div`
    h2 {
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 0.25rem;
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
