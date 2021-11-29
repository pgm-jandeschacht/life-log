import React from 'react'
import styled from 'styled-components'
import animation from '../../assets/animations/loadingAnimation.svg'
import { Breakpoint } from '../../variables'

const StyledImg = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    img {
        width: 5rem;
        @media (min-width: ${Breakpoint.small}) {
            width: 7.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            width: 10rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            width: 7.5rem;
        }
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
