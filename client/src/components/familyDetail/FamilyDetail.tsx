import React from 'react'
import img from '../../assets/images/karina_cox.jpg'
import peter from '../../assets/images/peter_kox.jpg'
import maria from '../../assets/images/maria_kox.jpg'
// import oscar from '../../assets/images/oscar_kox.jpg'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import FamilyDetailButtons from './FamilyDetailButtons'
import { useQuery } from '@apollo/client'
import { FamilyMemberData } from "../../interfaces";
import { GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { Loading } from '../alerts'
import { parseInt } from 'lodash'
import { doTypesOverlap } from 'graphql'
import { Link } from 'react-router-dom'



interface FamilyDetailProps {
    profile: any,
    userId: string
}

// Nog in componenten zetten, to veel styled components
const StyledImg = styled.div`
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        width: 12.5rem;
        height: 12.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 0;
        width: 15rem;
        height: 15rem;
        /* width: 50%; */
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `

const StyledImgSmall = styled.div`
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    @media (min-width: ${Breakpoint.small}) {
        width: 6.5rem;
        height: 6.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        width: 8rem;
        height: 8rem;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const DetailTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.medium}) {
        flex-direction: row;
        margin-bottom: 3rem;
    }
    `

const DetailInfo = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    @media (min-width: ${Breakpoint.medium}) {
        width: auto;
        margin-left: 2.5rem;
        display: block;
        align-self: auto;
    }
    
    div:first-of-type {
        margin-bottom: 2rem;
        align-self: center;
        @media (min-width: ${Breakpoint.medium}) {
            text-align: left;
        }
        
        h2 {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
            @media (min-width: ${Breakpoint.small}) {
                margin-bottom: 0.75rem;
                font-size: 2rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                margin-bottom: 1rem;
                font-size: 3rem;
            }
        }
        
        p {
            font-size: 1.2rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem;
            }
        }
    }
    
    div:last-of-type {
        width: 100%;
        p {
            font-size: 1.2rem;
            font-weight: 900;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem;
            }
            
            &:first-of-type {
                margin-bottom: 0.25rem;
                @media (min-width: ${Breakpoint.small}) {
                    margin-bottom: 0.5rem;
                }
                @media (min-width: ${Breakpoint.medium}) {
                    margin-bottom: 1rem;
                }
            }
        }
    }
`

const SubTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1rem;
        font-size: 1.75rem;
    }
`

const Bio = styled.div`
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 3rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 2rem;
    }
    
    p:last-of-type {
        font-size: 1.2rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.5rem;
            width: 50%;
        }
    }
    `

const Married = styled.div`
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 3rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 2rem;
    }
    `

const DetailSmallContainer = styled.div`
    @media (min-width: ${Breakpoint.large}) {
        width: 50%;
    }
    a {
        padding: 1rem;
        display: flex;
        align-items: center;
        background: ${Colors.secondary};
        transition: ${Transition.normal};
        border-radius: 5px;
        
        &:hover {
            transform: translateY(-5px);
            border-radius: 10px;
            background: ${Colors.accent2};
        }
    }
`

const DetailSmall = styled.div`
    margin-left: 2rem;
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    p:first-of-type {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.25rem;
            margin-bottom: 1rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }
    }
    
    p:last-of-type {
        font-size: 1.2rem;
        font-weight: 500;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.5rem;
        }
    }
`

const Children = styled.div`
    margin-bottom: 2rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 4rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 3rem;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        @media (min-width: ${Breakpoint.large}) {
            flex-direction: row;
        }
        
        li {
            margin-bottom: 1rem;
            @media (min-width: ${Breakpoint.medium}) {
                margin-bottom: 1.5rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                width: 100%;
                margin-bottom: 0;
                &:nth-of-type(odd) {
                    margin-right: 1rem;
                }
                div {
                    width: 100%;
                    a {
                        width: 100%;
                    }
                }
            }
            
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
    
`

const FamilyDetail: React.FC<FamilyDetailProps> = ({ profile, userId }) => {
    const { data, loading, error } = useQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    const calculateAge = (dobMember?: string) => {
        var dob = new Date(`${dobMember}`);  
        var month_diff = Date.now() - dob.getTime();  
        var age_dt = new Date(month_diff);   
        var year = age_dt.getUTCFullYear();  
        var age = Math.abs(year - 1970); 
        
        return age;
    }

    return (
        <div>
            <DetailTitle>
                <StyledImg >
                    {/* <img src={data?.familyMemberById.image} alt={`${data?.familyMemberById.firstname} ${data?.familyMemberById.lastname}`} /> */}
                    <img src={img} alt={`${data?.familyMemberById.firstname} ${data?.familyMemberById.lastname}`} />
                </StyledImg>
                
                <DetailInfo>
                    <div>
                        <h2>{data?.familyMemberById.firstname} {data?.familyMemberById.lastname}</h2>
                        <p>{profile.familyMember}</p>
                    </div>

                    <div>
                        <p>{calculateAge(data?.familyMemberById.dob)} {(calculateAge(data?.familyMemberById.dob)) < 1 ? 'year' : 'years'} old</p>
                        <p>Lives in {data?.familyMemberById.city}</p>
                    </div>
                </DetailInfo>
            </DetailTitle>

            <Bio>
                <SubTitle>About {data?.familyMemberById.firstname}</SubTitle>
                <p>{data?.familyMemberById.bio}</p>
            </Bio>

            <Married>
                <SubTitle>{profile.maritalStatus} with</SubTitle>
                <DetailSmallContainer>
                    <Link to={'/my-family'}>
                        <StyledImgSmall >
                            <img src={peter} alt={profile.partner} />
                        </StyledImgSmall>

                        <DetailSmall>
                            <p>{profile.partner}</p>
                            <p>37 years old</p>
                        </DetailSmall>
                    </Link>
                </DetailSmallContainer>
            </Married>

            <Children>
                <SubTitle>Children</SubTitle>
                <ul>
                    {profile.children.map((child: any) => (
                        <li>
                            <DetailSmallContainer>
                                <Link to={'/my-family'}>
                                    <StyledImgSmall >
                                        <img src={maria} alt={child.name} />
                                    </StyledImgSmall>

                                    <DetailSmall>
                                        <p>{child.name}</p>
                                        <p>5 years old</p>
                                    </DetailSmall>
                                </Link>
                            </DetailSmallContainer>
                        </li>
                    )) }
                </ul>
            </Children>

            <FamilyDetailButtons id={userId} name={data?.familyMemberById.firstname}/>
        </div>
    )
}

export default FamilyDetail
