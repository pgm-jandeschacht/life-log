import React from 'react'
import karina from '../../assets/images/karina_cox.jpg'
import peter from '../../assets/images/peter_kox.jpg'
import maria from '../../assets/images/maria_kox.jpg'
// import oscar from '../../assets/images/oscar_kox.jpg'
import styled from 'styled-components'
import { Shadow } from '../../variables'
import FamilyDetailButtons from './FamilyDetailButtons'
import { useQuery } from '@apollo/client'
import { FamilyMemberData, FamilyRelationData } from "../../interfaces";
import { GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { Loading } from '../alerts'
import { parseInt } from 'lodash'
import { doTypesOverlap } from 'graphql'
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations';



interface FamilyDetailRelationProps {
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

const FamilyDetailRelation: React.FC<FamilyDetailRelationProps> = ({ userId}) => {
    console.log('user Id from props.....', userId);

    // const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data , loading, error } = useQuery<FamilyRelationData>(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    // let partner = '';
    // let children = '';

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    
    console.log('data relations.....',data?.familyRelationsByFamilyMemberId);

    const partner = data?.familyRelationsByFamilyMemberId.filter(i => i.relationType.name === 'partner');
    const children = data?.familyRelationsByFamilyMemberId.filter(i => i.relationType.name === 'son' || i.relationType.name === 'daughter' || i.relationType.name === 'child');
    const grandChildren = data?.familyRelationsByFamilyMemberId.filter(i => i.relationType.name === 'grandson' || i.relationType.name === 'granddaughter' || i.relationType.name === 'grandchild');
    console.log('partner', partner);
    console.log('children', children);
    

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
            <Married>
                <SubTitle>{partner && (partner?.length > 0) ? 'married with:'  : 'single' }</SubTitle>
                <DetailSmallContainer>
                    <StyledImg size={8}>
                        {/* <img src={peter} alt={profile.partner} /> */}
                    </StyledImg>

                    <DetailSmall>
                        <p>{(partner && (partner?.length > 0)) ? partner[0].relatedFamilyMember.firstname : '' }</p>
                        {/* <p>37 years old</p> */}
                    </DetailSmall>
                </DetailSmallContainer>
            </Married>

            <Children>
                <SubTitle>Children</SubTitle>
                <ul>
                    {children?.map((child: any) => (
                        <li>
                            <DetailSmallContainer>
                                <StyledImg size={8}>
                                    <img src={maria} alt={child.relatedFamilyMember.firstname} />
                                </StyledImg>

                                <DetailSmall>
                                    <p>{child.relatedFamilyMember.firstname}</p>
                                    {/* <p>5 years old</p> */}
                                    <p>{ calculateAge(child.relatedFamilyMember.dob) } years old</p>
                                </DetailSmall>
                            </DetailSmallContainer>
                        </li>
                    )) }
                </ul>
            </Children>
            <Children>
                <SubTitle>GrandChildren</SubTitle>
                <ul>
                    {grandChildren?.map((child: any) => (
                        <li>
                            <DetailSmallContainer>
                                <StyledImg size={8}>
                                    <img src={maria} alt={child.relatedFamilyMember.firstname} />
                                </StyledImg>

                                <DetailSmall>
                                    <p>{child.relatedFamilyMember.firstname}</p>
                                    {/* <p>5 years old</p> */}
                                    <p>{ calculateAge(child.relatedFamilyMember.dob) } years old</p>
                                </DetailSmall>
                            </DetailSmallContainer>
                        </li>
                    )) }
                </ul>
            </Children>

            <FamilyDetailButtons id={userId} name={data?.familyRelationsByFamilyMemberId[0].familyMember.firstname}/>
        </div>
    )
}

export default FamilyDetailRelation
