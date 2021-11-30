import React from 'react'
import styled from 'styled-components'
import PictureImg from './PictureImg'
import PictureContent from './PictureContent'
import { Breakpoint } from '../../variables'

const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;
   @media (min-width: ${Breakpoint.large}) {
    flex-direction: row;
   }
`

const Picture: React.FC = () => {
    return (
        <StyledDiv>
            <PictureImg/>

            <PictureContent/>
        </StyledDiv>
    )
}

export default Picture
