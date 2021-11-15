import React from 'react'
import styled from 'styled-components';
import { Colors, Shadow, Transition } from '../../variables';

interface Props {
    
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

    a {
        width: 100%;
        background: ${Colors.red};
        box-shadow: ${Shadow.small};
        text-align: center;
        transition: ${Transition.normal};
        font-weight: 900;
        padding: 1.25rem 0;
        font-size: 2rem;
        border-radius: 10px;
        border: 4px solid ${Colors.red};
        color: ${Colors.secondary};
        
        &:hover {
            box-shadow: ${Shadow.medium};
            transform: translateY(-5px);
            color: ${Colors.red};
            border-color: ${Colors.red};
            background: ${Colors.secondary};
        }
    }
`

const ProfileSettingsDetail = (props: Props) => {

    const handlesSignOff = () => {
        localStorage.clear();
    }

    return (
        <StyledDiv>
            <a href="/" onClick={handlesSignOff}>Sign off</a>
        </StyledDiv>
    )
}

export default ProfileSettingsDetail
