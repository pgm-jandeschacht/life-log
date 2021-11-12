import React from 'react';
import styled from 'styled-components';
import { Colors, Transition, Shadow } from '../../variables'

interface ButtonProps {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const StyledButton = styled.button`
    margin-top: 1rem;
    margin-left: 1rem;
    background: ${Colors.primary};
    color: ${Colors.secondary};
    box-shadow: ${Shadow.small};
    border-radius: 10px;
    border: none;
    font-size: 2rem;
    font-weight: bold;
    padding: 1.5rem 3rem;
    cursor: pointer;
    transition: ${Transition.normal};

    &:hover {
        background: ${Colors.secondary};
        color: ${Colors.primary};
    }
`

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;
