import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
    
}

const StyledUl = styled.ul`

    li {
        display: flex;
        margin-bottom: 1.5rem;
        
        a {
            box-shadow: ${Shadow.small};
            border-radius: 10px;
            background: ${Colors.secondary};
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-height: 12rem;
            padding: 2rem 2.5rem;
            font-size: 2.5rem ;
            font-weight: 900;
            transition: ${Transition.normal};
            
            &:hover {
                box-shadow: ${Shadow.medium};
                transform: translateY(-5px) scale(1.02);
            }
        }
    }
`

const SettingsList = (props: Props) => {
    return (
        <StyledUl>
            <li>
                <a href="/settings/profile">
                    Profile
                    <FontAwesomeIcon icon={faChevronRight} />
                </a>
            </li>
        </StyledUl>
    )
}

export default SettingsList
