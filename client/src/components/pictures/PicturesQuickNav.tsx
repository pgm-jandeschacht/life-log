import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2.5rem;

    a {
        background: ${Colors.accent1};
        border-radius: 10px;
        padding: 1rem;
        font-size: 2.5rem;
        font-weight: 900;
        box-shadow: ${Shadow.small};
        transition: ${Transition.normal};
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent1};
        }

        &:first-of-type {
            margin-bottom: 1.5rem;
        }

        svg {
            margin-right: 2rem;
        }
    }
`

const PicturesQuickNav: React.FC = () => {
    return (
        <StyledDiv>
            <a href="/my-pictures">
                <FontAwesomeIcon icon={faClock}/>

                <span>Recent pictures</span>
            </a>

            <a href="/my-pictures">
                <FontAwesomeIcon icon={faHeart}/>

                <span>Pictures I liked</span>
            </a>
        </StyledDiv>
    )
}

export default PicturesQuickNav
