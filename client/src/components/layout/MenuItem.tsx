import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Transition, Shadow } from '../../variables'

interface MenuItemProps {
    title: string,
    to: string,
    children: React.ReactNode,
    styleColor: string,
    alt: boolean,
}

interface LiProps {
    backgroundColor: string,
    alternative: boolean
}

const Li = styled.li<LiProps>`
    width: 50%;
    transition: ${Transition.normal};
    display: flex;
    
    &:hover {
        transform: ${(LiProps) => (!LiProps.alternative ? 'translateY(-5px)' : '')};
    }
    
    &:nth-of-type(odd) {
        a {
            margin-right: 1.5rem;
        }
    }

    a {
        width: 100%;
        box-shadow: ${Shadow.small};
        background: ${(LiProps) => LiProps.backgroundColor};
        border-radius: 10px;
        padding: 3rem 0; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: ${(LiProps) => (!LiProps.alternative ? '1.5rem' : '')};
        margin-top: ${(LiProps) => (LiProps.alternative ? '1.25rem' : '')};
        
        
        svg {
            width: 100% !important;
            height: 6.25rem;
            color: ${(LiProps) => (LiProps.alternative ? `${Colors.secondary}` : `${Colors.primary}`)};
        }
    }
`

const MenuItem = ({title, to, children, styleColor, alt }: MenuItemProps) => {
    return (
        <Li backgroundColor={styleColor} alternative={alt}>
            <Link to={to} title={title}>{children}</Link>
        </Li>
    )
}

export default MenuItem
