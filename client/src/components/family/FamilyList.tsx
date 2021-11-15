import React from 'react'
import styled from 'styled-components'
import img from '../../assets/images/karina_cox.jpg'
import { Colors, Shadow, Transition } from '../../variables'

interface FamilyListProps {
    profiles: any
}

const StyledUl = styled.ul`
    li {
        border-bottom: 3px solid ${Colors.accent2};

        &:last-of-type {
            border-bottom: 0;
        }
        
        a {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-radius: 10px;
            transition: ${Transition.normal};

            &:hover {
                background: ${Colors.accent2};
            }
        }
    }
`

const StyledImg = styled.div`
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledDiv = styled.div`
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p:first-of-type {
        font-size: 3rem;
        font-weight: 900;
    }

    p:last-of-type {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
    }
`

const FamilyList: React.FC<FamilyListProps> = ({ profiles }) => {
    return (
        <StyledUl>
            { profiles.map((profile: any) => (
                <li>
                    <a href="/my-family">
                        <StyledImg>
                            <img src={img} alt={`${profile.firstName} ${profile.lastName}`} />
                        </StyledImg>

                        <StyledDiv>
                            <p>{profile.firstName} {profile.lastName}</p>
                            <p>{profile.familyMember}</p>
                        </StyledDiv>
                    </a>
                </li>
            )) }
        </StyledUl>
    )
}

export default FamilyList
