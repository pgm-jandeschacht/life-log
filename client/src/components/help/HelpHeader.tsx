import React, { useState } from 'react'
import { ButtonIcon } from '../buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Breakpoint, Colors } from '../../variables';

interface HelpHeaderProps {
    title: string, 
    backgroundColor: string
}

const StyledHeader = styled.div`
    padding: 2.5rem 2rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 4rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 5rem 4rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 3rem 4rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-weight: 900;
            font-size: 2rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 2.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 3.25rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 2.5rem;
            }
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
        }
    }

`

const HelpHeader: React.FC<HelpHeaderProps> = ({ title, backgroundColor }) => {
    const [helpClose, setHelpClose] = useState(true)
    const handleClosing = () => {
        setHelpClose(false)
    }
    return (
        <StyledHeader>
            <p>Help</p>
            <div>
                <h1>{title}</h1>

                <ButtonIcon background={backgroundColor} onClick={handleClosing} ><FontAwesomeIcon icon={faTimes} /></ButtonIcon>
            </div>

        </StyledHeader>
    )
}

export default HelpHeader
