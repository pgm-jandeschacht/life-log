import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors, Breakpoint } from '../../variables';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUsers, faCalendarAlt, faUserAlt,faPencilAlt, faCog, faQuestionCircle, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from '../buttons';

interface MenuProps {
    clicked: boolean,
    onClose: (open: boolean) => void
}

interface NavProps {
    change?: boolean
}

const Nav = styled.nav<NavProps>`
    background: ${Colors.primary};
    position: fixed;
    overflow-y: auto;
    z-index: 1;
    top: 0;
    left: 0;
    display: ${(NavProps) => (NavProps.change ? 'block' : 'none')};
    padding: 2.5rem 2rem;
    width: 100%;
    height: 100%;

    @media (min-width: ${Breakpoint.small}) {
        padding: 4rem 3rem
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 5rem 4rem
    }
    
    h2 {
        font-size: 2.5rem;
        color: ${Colors.secondary};
        font-weight: 900;
        
        @media (min-width: ${Breakpoint.small}) {
            font-size: 3rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 4rem;
        }
    }
    
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    `
    
const Container = styled.div`
    margin-bottom: 3.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 4.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 5rem;
    }
`

const Menu = ({ clicked, onClose }: MenuProps) => {
    const [click, setClick] = useState(true);

    const handleClicking = () => {
        setClick(false);
    }

    useEffect(() => {
        onClose(click);
        setClick(true);
    }, [onClose, click]);
    
    return (
        <Nav change={clicked}>
            <Container>
                <h2>Menu</h2>
                <ButtonIcon onClick={handleClicking} >
                    <FontAwesomeIcon icon={faTimes} />
                </ButtonIcon>
            </Container>
            
            <ul>
                <MenuItem alt={false} styleColor={"#FEDDBE"} to={"/my-pictures"} title={"My pictures"}><FontAwesomeIcon icon={faImage} /></MenuItem>
                <MenuItem alt={false} styleColor={"#B1DFD4"} to={"/my-family"} title={"My family"}><FontAwesomeIcon icon={faUsers} /></MenuItem>
                <MenuItem alt={false} styleColor={"#FFECB0"} to={"/my-agenda"} title={"My agenda"}><FontAwesomeIcon icon={faCalendarAlt} /></MenuItem>
                <MenuItem alt={false} styleColor={"#C4E0EB"} to={"/about-me"} title={"About me"}><FontAwesomeIcon icon={faUserAlt} /></MenuItem>
                <MenuItem alt={false} styleColor={"#FFB2AB"} to={"/my-wishlist"} title={"My wishlist"}><FontAwesomeIcon icon={faPencilAlt} /></MenuItem>
                <MenuItem alt={false} styleColor={"#F2F2F2"} to={"/settings"} title={"Settings"}><FontAwesomeIcon icon={faCog} /></MenuItem>
                
                <MenuItem alt={true} styleColor={"#0A213A"} to={"/help"} title={"Help"}><FontAwesomeIcon icon={faQuestionCircle} /></MenuItem>
                <MenuItem alt={true} styleColor={"#0A213A"} to={"/"} title={"Home"}><FontAwesomeIcon icon={faHome} /></MenuItem>
            </ul>
        </Nav>
    )
}

export default Menu
