import React from 'react'
import styled from 'styled-components'
import vacationImg from '../../assets/images/vacation.jpg'
import { Breakpoint } from '../../variables'

const StyledImg = styled.div`
    width: 100%;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: 10px;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    margin-bottom: 1.5rem;
    
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 0;
        padding-bottom: 50%;
        width: 50%;
    }

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const PictureImg: React.FC = () => {
    return (
        <StyledImg>
            <img src={vacationImg} alt="On Vacation" />
        </StyledImg>
    )
}

export default PictureImg
