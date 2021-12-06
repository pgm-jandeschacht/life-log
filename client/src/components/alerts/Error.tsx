import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Breakpoint, Colors, Transition } from '../../variables'

interface ErrorProps {
    error: string
}

const StyledError = styled.div`
    padding: 1rem;
    border-radius: 10px;
    background: ${Colors.red};
    color: ${Colors.secondary};
    font-size: 1.2rem;
    font-weight: 700;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 1.5rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.5rem;
    }
    
    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 700;
        color: ${Colors.red};
        background: ${Colors.secondary};
        transition: ${Transition.normal};
        @media (min-width: ${Breakpoint.small}) {
            padding: 0.6rem 1.2rem;
            font-size: 1.4rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-top: 1.5rem;
            padding: 0.75rem 1.5rem;
            font-size: 1.6rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-top: 1rem;
            padding: 0.6rem 1.2rem;
            font-size: 1.4rem;
        }

        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.secondary};
        }
    }
`

const Error: React.FC<ErrorProps> = ({ error }) => {
    const history = useHistory();
    const handleClicking = () => {
        history.go(0);
    }

    return (
        <StyledError>
            <p>{error}</p>

            <button onClick={handleClicking}>Reload page</button>
        </StyledError>
    )
}

export default Error
