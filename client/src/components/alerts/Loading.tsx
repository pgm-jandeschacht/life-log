import React from 'react'
import styled from 'styled-components'
import animation from '../../assets/animations/loadingAnimation.svg'

const StyledImg = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    img {
        width: 10rem;
    }
`

const Loading = () => {
    return (
        <StyledImg>
            <img src={animation} alt="Loading animation" />
        </StyledImg>
    )
}

export default Loading
