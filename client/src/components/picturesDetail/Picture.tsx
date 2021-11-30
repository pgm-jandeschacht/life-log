import React from 'react'
import styled from 'styled-components'
import PictureImg from './PictureImg'
import PictureContent from './PictureContent'

const StyledDiv = styled.div`
   display: flex;
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
