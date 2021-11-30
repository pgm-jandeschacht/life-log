import React from 'react'
import styled from 'styled-components'
import vacationImg from '../../assets/images/vacation.jpg'

const StyledImg = styled.div`
    width: 50%;
    margin-right: 1rem;
    overflow: hidden;
    border-radius: 10px;
    height: 0;
    padding-bottom: 50%;
    position: relative;

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
