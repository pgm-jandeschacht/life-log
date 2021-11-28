import React from 'react'
import karina from '../../assets/images/karina_cox.jpg'
import peter from '../../assets/images/peter_kox.jpg'
import maria from '../../assets/images/maria_kox.jpg'
// import oscar from '../../assets/images/oscar_kox.jpg'
import styled from 'styled-components'
import { Shadow } from '../../variables'
import FamilyDetailButtons from './FamilyDetailButtons'
import { useQuery } from '@apollo/client'
import { FamilyMemberData } from "../../interfaces";
import { GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { Loading } from '../alerts'
import { parseInt } from 'lodash'
import { doTypesOverlap } from 'graphql'



interface FamilyDetailProps {
    profile: any,
    userId: string
}

interface StyledImgProps {
    size: number
}

// Nog in componenten zetten, to veel styled components
const StyledImg = styled.div<StyledImgProps>`
    width: ${(StyledImgProps) => StyledImgProps.size}rem;
    height: ${(StyledImgProps) => StyledImgProps.size}rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${Shadow.small};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const DetailTitle = styled.div`
    display: flex;
    margin-bottom: 3rem;
`

const DetailInfo = styled.div`
    margin-left: 2.5rem;

    div:first-of-type {
        margin-bottom: 2rem;

        h2 {
            font-size: 3rem;
            font-weight: 900;
            margin-bottom: 1rem;
        }

        p {
            font-size: 2rem;
        }
    }

    div:last-of-type {
        p {
            font-size: 2rem;
            font-weight: 900;
            
            &:first-of-type {
                margin-bottom: 1rem;
            }
        }
    }
`

const SubTitle = styled.p`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
`

const Bio = styled.div`
    margin-bottom: 3rem;
    
    p:last-of-type {
        font-size: 2rem;
    }
`

const Married = styled.div`
    margin-bottom: 3rem;
`

const DetailSmallContainer = styled.div`
    display: flex;
    align-items: center;
`

const DetailSmall = styled.div`
    margin-left: 2rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    p:first-of-type {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p:last-of-type {
        font-size: 2rem;
        font-weight: 500;
    }
`

const Children = styled.div`
margin-bottom: 4rem;
    
    li {
        margin-bottom: 1.5rem;

        &:last-of-type {
            margin-bottom: 0;
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
    console.log(data?.familyMemberById);

    function calculateAge (dobMember: string | undefined) {
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
                <StyledImg size={15}>
                    <img src={data?.familyMemberById.image} alt={`${data?.familyMemberById.firstname} ${data?.familyMemberById.lastname}`} />
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
                    <StyledImg size={8}>
                        <img src={peter} alt={profile.partner} />
                    </StyledImg>

                    <DetailSmall>
                        <p>{profile.partner}</p>
                        <p>37 years old</p>
                    </DetailSmall>
                </DetailSmallContainer>
            </Married>

            <Children>
                <SubTitle>Children</SubTitle>
                <ul>
                    {profile.children.map((child: any) => (
                        <li>
                            <DetailSmallContainer>
                                <StyledImg size={8}>
                                    <img src={maria} alt={child.name} />
                                </StyledImg>

                                <DetailSmall>
                                    <p>{child.name}</p>
                                    <p>5 years old</p>
                                </DetailSmall>
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
