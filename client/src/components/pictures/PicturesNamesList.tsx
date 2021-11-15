import React from 'react'
import styled from 'styled-components'
import fallback from '../../assets/images/lucia_mullen.jpg'
import { Colors, Shadow, Transition } from '../../variables'

interface PicturesNamesListProps {
    usersList: any
}

const StyledUl = styled.ul`
`

const StyledLi = styled.li`
    border-bottom: 3px solid ${Colors.accent1};
    
    &:first-of-type {
        a {
            margin-top: 0;
        }
    }

    &:last-of-type {
        border: none;
    }

    a {
        display: flex;
        align-items: center;
        transition: ${Transition.normal};
        border-radius: 10px;
        padding: 1rem;


        div {
            width: 6.25rem;
            height: 6.25rem;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: ${Shadow.small};

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        p {
            margin-left: 2rem;
            font-size: 2rem;
            font-weight: 900;
        }

        &:hover {
            background: ${Colors.accent1};
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
