import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'

interface FamilyDetailButtonsProps {
    name: string | undefined,
    id: string
}

interface StyledButtonProps {
    color: string
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: ${Breakpoint.large}) {
        flex-direction: row;
    }
`

const StyledAnchor = styled.a<StyledButtonProps>`
    background: ${(StyledButtonProps) => StyledButtonProps.color};
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 900;
    display: flex;
    justify-content: center;
    text-align: center;
    transition: ${Transition.normal};
    box-shadow: ${Shadow.small};
    @media (min-width: ${Breakpoint.small}) {
        padding: 1rem;
        font-size: 1.2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 0.75rem 1rem;
        margin-bottom: 0;
        width: 100%;
        &:first-of-type {
            margin-right: 1rem;
        }
    }
    
    &:hover {
        transform: translateY(-5px);
        background: ${Colors.primary};
        color: ${(StyledButtonProps) => StyledButtonProps.color};
        box-shadow: ${Shadow.medium};
    }
`

const FamilyDetailButtons: React.FC<FamilyDetailButtonsProps> = ({ name, id }) => {
    return (
        <StyledDiv>
            <StyledAnchor href="/my-pictures" color={"#FEDDBE"}>Pictures from {name}</StyledAnchor>
            <StyledAnchor href="/my-wishlist/add" color={"#FFB2AB"}>Ask {name} to bring something</StyledAnchor>
        </StyledDiv>
    )
}

export default FamilyDetailButtons
