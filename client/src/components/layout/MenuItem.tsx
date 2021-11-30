import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Transition, Shadow, Breakpoint } from '../../variables'

interface MenuItemProps {
    title: string,
    to: string,
    children: React.ReactNode,
    styleColor: string,
    alt: boolean
}

interface LiProps {
    backgroundColor: string,
    alternative: boolean
}

const Li = styled.li<LiProps>`
    width: 50%;
    transition: ${Transition.normal};
    display: flex;
    
    @media (min-width: ${Breakpoint.extraLarge}) {
        width: 25%;
    }

    &:hover {
        transform: translateY(-5px);
        a {
            border-color: ${(LiProps) => (LiProps.alternative ? '' : `${LiProps.backgroundColor}`)};
            background: ${(LiProps) => (LiProps.alternative ? `${Colors.ternary}` : `${Colors.primary}` )};

            svg {
                color: ${(LiProps) => (LiProps.alternative ? `${Colors.primary}` : `${LiProps.backgroundColor}` )};
            }
        }
    }
    
    &:nth-of-type(odd) {
        a {
            margin-right: 0.5rem;
            
            @media (min-width: ${Breakpoint.small}) {
                margin-right: 0.75rem;
            }
        }
    }

    &:nth-of-type(even) {
        a {
            margin-left: 0.5rem;
            
            @media (min-width: ${Breakpoint.small}) {
                margin-left: 0.75rem;
            }
        }
    }
    
    a {
        border: 4px solid transparent;
        transition: ${Transition.normal};
        width: 100%;
        box-shadow: ${Shadow.small};
        background: ${(LiProps) => LiProps.backgroundColor};
        border-radius: 10px;
        padding: 1.75rem 0; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: ${(LiProps) => (!LiProps.alternative ? '1rem' : '')};
        margin-top: ${(LiProps) => (LiProps.alternative ? '1rem' : '')};
        
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: ${(LiProps) => (!LiProps.alternative ? '1.5rem' : '')};
            margin-top: ${(LiProps) => (LiProps.alternative ? '1.25rem' : '')};
            padding: 2rem 0; 
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 3rem 0; 
        }
        @media (min-width: ${Breakpoint.extraLarge}) {
            margin-top: 0;
            margin-bottom: 1.5rem;
            margin-right: 0.75rem;
            margin-left: 0.75rem;
        }
        
        svg {
            transition: ${Transition.normal};
            width: 100% !important;
            height: 4rem;
            color: ${(LiProps) => (LiProps.alternative ? `${Colors.secondary}` : `${Colors.primary}`)};
            
            @media (min-width: ${Breakpoint.small}) {
                height: 5.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                height: 6.5rem;
            }
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
