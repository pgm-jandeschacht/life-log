import React from 'react'
import styled from 'styled-components'
import fallback from '../../assets/images/lucia_mullen.jpg'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'

interface PicturesNamesListProps {
    usersList: any
}

const StyledUl = styled.ul`
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
    }
`

const StyledLi = styled.li`
    @media (min-width: ${Breakpoint.large}) {
        width: calc(50% - 0.5rem);

        &:nth-of-type(odd) {
            margin-right: 1rem;
        }
    }

    &:first-of-type {
        a {
            margin-top: 0;
        }
    }

    a {
        background: ${Colors.secondary};
        display: flex;
        align-items: center;
        transition: ${Transition.normal};
        border-radius: 2px;
        padding: 0.75rem;
        margin-bottom: 0.75rem;
        @media (min-width: ${Breakpoint.small}) {
            padding: 1rem;
            margin-bottom: 1rem;
        }
        
        div {
            width: 4rem;
            height: 4rem;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: ${Shadow.small};
            @media (min-width: ${Breakpoint.small}) {
                width: 5rem;
                height: 5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                width: 6.25rem;
                height: 6.25rem;
            }

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        p {
            margin-left: 1.5rem;
            word-break: break-word;
            font-size: 1.2rem;
            font-weight: 900;
            @media (min-width: ${Breakpoint.small}) {
                margin-left: 2rem;
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem;
            }
        }

        &:hover {
            background: ${Colors.accent1};
            border-radius: 10px;
            transform: translateY(-5px);
        }
    }
`

const PicturesNamesList: React.FC<PicturesNamesListProps> = ({ usersList }) => {
    return (
        <StyledUl>
            {usersList.map((user: any) => (
                <StyledLi key={user.id}>
                    <a href="/my-pictures">
                        {/* <img src={`../../assets/images/${user.image}`} alt={`${user.firstName} ${user.lastName}`} /> */}
                        <div>
                            <img src={fallback} alt={`${user.firstName} ${user.lastName}`} />
                        </div>

                        <p>{user.firstName} {user.lastName}</p>
                    </a>
                </StyledLi>
            ))}
        </StyledUl>
    )
}

export default PicturesNamesList
