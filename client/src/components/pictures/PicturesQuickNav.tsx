import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        flex-direction: row;
        margin-bottom: 2rem;
    }
    
    a {
        background: ${Colors.accent1};
        border-radius: 10px;
        padding: 0.75rem;
        font-size: 1.5rem;
        font-weight: 900;
        box-shadow: ${Shadow.small};
        transition: ${Transition.normal};
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: ${Breakpoint.small}) {
            padding: 1rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
            width: 100%;
        }
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent1};
        }
        
        &:first-of-type {
            margin-bottom: 1rem;
            @media (min-width: ${Breakpoint.medium}) {
                margin-bottom: 1.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                margin-bottom: 0;
                margin-right: 1rem;
            }
        }
        
        svg {
            margin-right: 1rem;
            @media (min-width: ${Breakpoint.small}) {
                margin-right: 1.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                margin-right: 2rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                margin-right: 1.5rem;
            }
        }
    }
`

const PicturesQuickNav: React.FC = () => {
    return (
        <StyledDiv>
            <Link to={"/my-pictures/recent"} title={"Recently added pictures"}>
                <FontAwesomeIcon icon={faClock}/>

                <span>Recent pictures</span>
            </Link>

            <Link to={"/my-pictures/liked"} title={"Liked pictures"}>
                <FontAwesomeIcon icon={faHeart}/>

                <span>Pictures I liked</span>
            </Link>
        </StyledDiv>
    )
}

export default PicturesQuickNav
