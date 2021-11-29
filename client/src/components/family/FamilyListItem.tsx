import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import img from '../../assets/images/karina_cox.jpg'

interface FamilyListItemProps {
    familyMember: any
}

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

        &:hover {
            background: ${Colors.accent2};
            border-radius: 10px;
            transform: translateY(-5px);
        }
    }
`

const StyledImg = styled.div`    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    @media (min-width: ${Breakpoint.small}) {
        width: 7.5rem;
        height: 7.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        width: 10rem;
        height: 10rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        width: 7rem;
        height: 7rem;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const StyledDiv = styled.div`
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${Breakpoint.small}) {
        margin-left: 2rem;
    }

    p:first-of-type {
        word-break: break-word;
        font-size: 1.5rem;
        font-weight: 900;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 3rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
        }
    }
    
    p:last-of-type {
        word-break: break-word;
        margin-top: 0.2rem;
        font-size: 1.2rem;
        font-weight: 500;
        @media (min-width: ${Breakpoint.small}) {
            margin-top: 0.5rem;
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-top: 1rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-top: 0.5rem;
            font-size: 1.5rem;
        }
    }
`

const FamilyListItem: React.FC<FamilyListItemProps> = ({ familyMember }) => {
    return (
        <StyledLi key={familyMember.id}>
            <Link to={`/my-family/${familyMember.relatedFamilyMember.id}`} title={`${familyMember.relatedFamilyMember.firstname} ${familyMember.relatedFamilyMember.lastname}`}>
                <StyledImg>
                    {/* <img src={familyMember.relatedFamilyMember.image} alt={`${familyMember.relatedFamilyMember.firstname} ${familyMember.relatedFamilyMember.lastname}`} /> */}
                    <img src={img} alt={`${familyMember.relatedFamilyMember.firstname} ${familyMember.relatedFamilyMember.lastname}`} />
                </StyledImg>

                <StyledDiv>
                    <p>{familyMember.relatedFamilyMember.firstname} {familyMember.relatedFamilyMember.lastname}</p>
                    <p>{familyMember.relationType.name}</p>
                </StyledDiv>
            </Link>
        </StyledLi>
    )
}

export default FamilyListItem
