import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { Colors, Transition } from '../../variables'
import { ButtonNav } from '../buttons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavigationProps {
    backgroundColorStyle: string
}

interface DivProps {
    backgroundColor: string,
    buttonColor: boolean
}

const Div = styled.div<DivProps>`
    position: fixed;
    bottom: 0;
    display: flex;
    background: ${(DivProps) => (DivProps.backgroundColor)};
    width: 100%;
    padding: 2rem 4rem;
    border-radius: 20px 20px 0 0;

    a {
        text-align: center;
        margin-right: 2rem;
        width: 100%;
        background: ${(DivProps) => (DivProps.buttonColor ? Colors.secondary : Colors.primary)};
        color: ${(DivProps) => (DivProps.buttonColor ? Colors.primary : Colors.secondary)};
        font-size: 2rem;
        font-weight: 700;
        padding: 1.25rem 0;
        border-radius: 10px;
        transition: ${Transition.normal};
        
        &:hover {
            transform: translateY(-5px);
            background: ${(DivProps) => (DivProps.buttonColor ? Colors.ternary : Colors.secondary)};
            color: ${(DivProps) => (DivProps.buttonColor ? Colors.primary : Colors.primary)};
        }
    }
`

const Navigation = ({ backgroundColorStyle }: NavigationProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        console.log("Clicked open");
        setIsClicked(true);
    }
    
    const handleClosing = (click: boolean) => {
        if (!click) {
            setIsClicked(false);
        }
    }

    // Change background color of navigation according to the URL
    const [background, setBackground] = useState(Colors.primary)
    const [isBlue, setIsBlue] = useState(true)

    useEffect(() => {
        if(backgroundColorStyle === 'accent1') {
            setBackground(Colors.accent1);
            setIsBlue(false);
        } else if(backgroundColorStyle === 'accent2') {
            setBackground(Colors.accent2);
            setIsBlue(false);
        } else if(backgroundColorStyle === 'accent3') {
            setBackground(Colors.accent3);
            setIsBlue(false);
        } else if(backgroundColorStyle === 'accent4') {
            setBackground(Colors.accent4);
            setIsBlue(false);
        } else if(backgroundColorStyle === 'accent5') {
            setBackground(Colors.accent5);
            setIsBlue(false);
        } else if (backgroundColorStyle === 'blue') {
            setIsBlue(true);
        }
    });

    return (
        <footer>
            <Div buttonColor={isBlue} backgroundColor={background}>
                <Link to={'/help'} title={'Help'}>Help</Link>

                <ButtonNav onClick={handleClick} backgroundColorButton={background} buttonColorButton={isBlue}>
                    Open menu<FontAwesomeIcon icon={faChevronUp} />
                </ButtonNav>
            </Div>

           <Menu clicked={isClicked} onClose={handleClosing} />
        </footer>
    )
}

export default Navigation
