import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../variables';

interface ButtonIconProps {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const StyledButton = styled.button`
    background: ${Colors.secondary};
    padding: 0.77rem 1.25rem;
    border-radius: 50%;

    svg {
        color: ${Colors.primary};
        // font-size: 2rem;
        width: 2rem !important;
        height: auto;
    }
`

const ButtonIcon = ({ children, onClick }: ButtonIconProps) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default ButtonIcon;
