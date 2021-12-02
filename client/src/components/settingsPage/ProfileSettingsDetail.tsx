import React from 'react'
import styled from 'styled-components';
import { Breakpoint, Colors, Shadow, Transition } from '../../variables';

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
    
    div {
        display: flex;
        justify-content: center;
        @media (min-width: ${Breakpoint.large}) {
            justify-content: flex-start;
        }

        a {
            width: 100%;
            background: ${Colors.red};
            box-shadow: ${Shadow.small};
            text-align: center;
            transition: ${Transition.normal};
            font-weight: 900;
            padding: 0.75rem 0;
            font-size: 1.25rem;
            border-radius: 10px;
            border: 4px solid ${Colors.red};
            color: ${Colors.secondary};
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.75rem ;
                padding: 1rem 0;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem ;
                padding: 1.25rem 0;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 1.4rem ;
                padding: 1rem 0;
                width: 50%;
            }
            
            &:hover {
                box-shadow: ${Shadow.medium};
                transform: translateY(-5px);
                color: ${Colors.red};
                border-color: ${Colors.red};
                background: ${Colors.secondary};
            }
        }
    }
`

const ProfileSettingsDetail: React.FC = () => {

    const handlesSignOff = () => {
        localStorage.clear();
    }

    return (
        <StyledDiv>
            <h2>Log out of account</h2>
            <div>
                <a href="/" onClick={handlesSignOff}>Log off</a>
            </div>
        </StyledDiv>
    )
}

export default ProfileSettingsDetail
