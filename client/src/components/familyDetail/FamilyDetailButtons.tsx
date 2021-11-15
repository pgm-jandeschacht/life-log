import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'

interface FamilyDetailButtonsProps {
    name: string
}

interface StyledButtonProps {
    color: string
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledAnchor = styled.a<StyledButtonProps>`
    background: ${(StyledButtonProps) => StyledButtonProps.color};
    margin-bottom: 1.5rem;
    border-radius: 10px;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 900;
    display: flex;
    justify-content: center;
    transition: ${Transition.normal};
    box-shadow: ${Shadow.small};
    
    &:hover {
        transform: translateY(-5px);
        background: ${Colors.primary};
        color: ${(StyledButtonProps) => StyledButtonProps.color};
        box-shadow: ${Shadow.medium};
    }
`

const FamilyDetailButtons: React.FC<FamilyDetailButtonsProps> = ({ name }) => {
    return (
        <StyledDiv>
            <StyledAnchor href="/my-pictures" color={"#FEDDBE"}>Pictures from {name}</StyledAnchor>
            <StyledAnchor href="/my-wishlist" color={"#FFB2AB"}>Ask {name} to bring something</StyledAnchor>
        </StyledDiv>
    )
}

export default FamilyDetailButtons
