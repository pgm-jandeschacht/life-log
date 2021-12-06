import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow } from '../../variables'
import { beautifyDate } from '../../services/format/date'
import { useQuery } from '@apollo/client'
import { GET_FAMILYMEMBERDETAILS_BY_FAMILYMEMBERID } from '../../graphql/familyMembers';
import { FamilyMemberData } from '../../interfaces';
import { Error, Loading } from '../alerts'

const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${Breakpoint.large}) {
        align-items: flex-start;
        flex-direction: row;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 1.5rem;
            font-size: 2.2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            span {
                display: block;
            }
        }
    }
`

const StyledUl = styled.ul`
        width: 100%;
    @media (min-width: ${Breakpoint.large}) {
        width: 66.6%;
    }
    
    li {
        background: ${Colors.secondary};
        box-shadow: ${Shadow.small};
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            padding: 1.25rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 1.25rem;
            margin-bottom: 1rem;
        }
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        p:first-of-type {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.25rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                margin-bottom: 1rem;
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                margin-bottom: 0.75rem;
                font-size: 1.25rem;
            }
        }
        
        p:last-of-type {
            word-break: break-word;
            font-size: 1.2rem;
            font-weight: 700;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.75rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 1.75rem;
            }
        }
    }
`

const StyledLi = styled.div`
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1rem;
    }
`

const StyledImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${Breakpoint.large}) {
        display: block;
        width: 33.3%;
        position: sticky;
        top: 2rem;
    }

    div {
        overflow: hidden;
        width: 8rem;
        height: 8rem;
        border-radius: 20px;
        box-shadow: ${Shadow.small};
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 1.5rem;
            width: 12rem;
            height: 12rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 2rem;
            width: 16rem;
            height: 16rem;
        }
        
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

const AboutMe: React.FC = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyMemberData>(GET_FAMILYMEMBERDETAILS_BY_FAMILYMEMBERID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;

    return (
        <StyledDiv>
            <StyledImg>
                <div>
                    <img src={data?.familyMemberById.image} alt={`${data?.familyMemberById.firstname} ${data?.familyMemberById.lastname}`} />
                </div>

                <h2>{data?.familyMemberById.firstname} <span>{data?.familyMemberById.lastname}</span></h2>
            </StyledImg>

            <StyledUl>
                <StyledLi>
                    <li>
                        <p>Date of birth</p>
                        
                        <p>{ beautifyDate(data?.familyMemberById.dob) }</p>
                    </li>

                    <li>
                        <p>Gender</p>

                        <p>{ data?.familyMemberById.gender }</p>
                    </li>
                </StyledLi>

                <li>
                    <p>Location</p>

                    <p>{ data?.familyMemberById.city } , { data?.familyMemberById.country }</p>
                </li>

                <li>
                    <p>Career</p>

                    <p>{ data?.familyMemberById.occupation }</p>
                </li>
            </StyledUl>
        </StyledDiv>

    )
}

export default AboutMe
