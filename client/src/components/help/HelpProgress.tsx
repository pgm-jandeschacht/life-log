import React from 'react'
import { Breakpoint, Colors, Transition } from '../../variables'
import styled from 'styled-components'

interface HelpProgressProps {
    data: any,
    background: string,
    count: number,
}

const StyledProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5rem;

    span {
        border-radius: 10px;
        width: 0.75rem;
        height: 0.75rem;
        background: ${Colors.secondary};
        margin-right: 0.75rem;
        transition: ${Transition.slow};
        @media (min-width: ${Breakpoint.small}) {
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            width: 0.75rem;
            height: 0.75rem;
            margin-right: 0.75rem;
        }
        
        &:last-of-type {
            margin-right: 0;
        }
    }
`

interface ActiveProgressProps {
    active: boolean,
    backgroundColor: string
}

const ActiveProgress = styled.span<ActiveProgressProps>`
    background: ${(ActiveProgressProps) => (ActiveProgressProps.active ? ActiveProgressProps.backgroundColor : '')}!important;
    width:  ${(ActiveProgressProps) => (ActiveProgressProps.active ? '3rem' : '')}!important;
    @media (min-width: ${Breakpoint.small}) {
        width:  ${(ActiveProgressProps) => (ActiveProgressProps.active ? '4rem' : '')}!important;
    }
`

const HelpProgress: React.FC<HelpProgressProps> = ({ data, background, count }) => {
    return (
        <StyledProgress color={background}>
            {
                data.map((help: any, index: number) => (
                    <ActiveProgress backgroundColor={background} active={count === (help.step) ? true : false} key={help.step}></ActiveProgress>
                ))
            }
        </StyledProgress>
    )
}

export default HelpProgress
