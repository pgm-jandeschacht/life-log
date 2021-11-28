import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface Props {
    
}

const StyledUl = styled.ul`

    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
    }


    li {
        display: flex;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 1rem;
            width: calc(50% - 0.5rem);
        }

        &:nth-of-type(odd) {
            @media (min-width: ${Breakpoint.large}) {
                margin-right: 1rem;
            }
        }

        
        a {
            box-shadow: ${Shadow.small};
            border-radius: 10px;
            background: ${Colors.secondary};
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.2rem 1.5rem;
            font-size: 1.5rem ;
            font-weight: 900;
            transition: ${Transition.normal};
            @media (min-width: ${Breakpoint.small}) {
                font-size: 2rem ;
                padding: 1.5rem 2rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2.5rem ;
                max-height: 12rem;
                padding: 2rem 2.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 2rem ;
                padding: 1.5rem 2rem;
            }

            
            &:hover {
                box-shadow: ${Shadow.medium};
                transform: translateY(-5px);
                background: ${Colors.primary};
                color: ${Colors.secondary};
            }
        }
    }
`

const SettingsList = (props: Props) => {
    return (
        <StyledUl>
            <li>
                <Link to={"/settings/profile"} title={"Profile settings"}>
                    Profile
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </li>
            <li>
                <Link to={"/settings/profile"} title={"Profile settings"}>
                    Profile
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </li>
        </StyledUl>
    )
}

export default SettingsList
