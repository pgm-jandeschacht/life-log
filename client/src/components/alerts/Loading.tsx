import React from 'react'
import styled from 'styled-components'
import animation from '../../assets/animations/loadingAnimation.svg'
import { Breakpoint } from '../../variables'

const StyledImg = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin-top: 2rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-top: 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-top: 5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-top: 3rem;
    }

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

const Loading: React.FC = () => {
    return (
        <StyledImg>
            <img src={animation} alt="Loading animation" />
        </StyledImg>
    )
}

export default Loading
