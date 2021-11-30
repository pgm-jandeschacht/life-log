import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Breakpoint, Colors, Transition } from '../../variables'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledDiv = styled.div`
    width: 100%;
    margin-left: 0;
    @media (min-width: ${Breakpoint.large}) {
        margin-left: 1rem;
        width: 50%;
    }
    `

const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2 {
        font-weight: 900;
        font-size: 2rem;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 3rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2.5rem;
        }
    }
` 

interface StyledButtonProps {
    heart: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    background: none;
    font-size: 1.5rem;
    transition: ${Transition.normal};
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        font-size: 2rem;
    }
    svg {
        transition: ${Transition.normal};
        path {
            transition: ${Transition.normal};
            stroke: ${(StyledButtonProps) => StyledButtonProps.heart ? Colors.red : Colors.primary};
            stroke-width: 55;
        }
        color: ${(StyledButtonProps) => StyledButtonProps.heart ? Colors.red : Colors.secondary};
    }

    &:hover {
        transform: translateY(-5px);
    }
`

const Subtitle = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.5rem;
    }
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.5rem;
    }
    `

const Info = styled.div`
    display: flex;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
    }
    
    p {
        font-size: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.2rem;
        }
        
        &:last-of-type {
            margin-left: 0.75rem;
            &::before {
                content: '|';
                margin-right: 0.75rem;
            }
        }
    }
    `

const Detail = styled.div`
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
    }
    
    p {
        &:first-of-type {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 0.75rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.75rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 1.75rem;
            }
        }
        
        &:last-of-type {
            font-size: 1rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.2rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 1.2rem;
            }
        }
    }
    `

const PeopleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
    }
    
    li {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: 5px;
        background: ${Colors.accent1};
        font-size: 1.2rem;
        font-weight: 700;
        display: flex;
        transition: ${Transition.normal};
        
        a {
            padding: 0.4rem 0.8rem;
            @media (min-width: ${Breakpoint.small}) {
                padding: 0.5rem 1rem;
            }
        }

        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent1}
        }
    }
`

const PictureContent: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const handleClicking = () => {
        setClicked(!clicked);
    }
    return (
        <StyledDiv>
            <StyledTitle>
                <h2>Fun in a field</h2>

                <StyledButton heart={clicked} onClick={handleClicking}><FontAwesomeIcon icon={faHeart} /></StyledButton>
            </StyledTitle>

            <Info>
                <p>05/08/2021</p>
                <p>Lockswood</p>
            </Info>

            <Detail>
                <p>Sarah Hoper</p>
                <p>We had a fun trip with our kids visiting a field in the middle of nowhere. They didn't even cry the whole time!</p>
            </Detail>

            <Subtitle>
                <p>People in the picture</p>
            </Subtitle>
            <PeopleList>
                <li>
                    <Link to={'/my-family/1'} title={"Sarah Hoper"}>
                        Sarah Hoper
                    </Link>
                </li>

                <li>
                    <Link to={'/my-family/1'} title={"Max Kox"}>
                        Max Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-family/1'} title={"Maria Kox"}>
                        Maria Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-family/1'} title={"Tom Kox"}>
                        Tom Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-family/1'} title={"Louis Kox"}>
                        Louis Kox
                    </Link>
                </li>
            </PeopleList>

            <Subtitle>
                <p>More pictures of</p>
            </Subtitle>
            <PeopleList>
                <li>
                    <Link to={'/my-pictures/user/1'} title={"Pictures of Sarah Hoper"}>
                        Sarah Hoper
                    </Link>
                </li>

                <li>
                    <Link to={'/my-pictures/user/1'} title={"Pictures of Max Kox"}>
                        Max Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-pictures/user/1'} title={"Pictures of Maria Kox"}>
                        Maria Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-pictures/user/1'} title={"Pictures of Tom Kox"}>
                        Tom Kox
                    </Link>
                </li>

                <li>
                    <Link to={'/my-pictures/user/1'} title={"Pictures of Louis Kox"}>
                        Louis Kox
                    </Link>
                </li>
            </PeopleList>
        </StyledDiv>
    )
}

export default PictureContent
