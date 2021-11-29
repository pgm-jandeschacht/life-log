import React from 'react'
import karina from '../../assets/images/karina_cox.jpg'
import peter from '../../assets/images/peter_kox.jpg'
import maria from '../../assets/images/maria_kox.jpg'
// import oscar from '../../assets/images/oscar_kox.jpg'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import FamilyDetailButtons from './FamilyDetailButtons'
import { useQuery } from '@apollo/client'
import { FamilyMemberData, FamilyRelationData } from "../../interfaces";
import { GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { Loading } from '../alerts'
import { parseInt } from 'lodash'
import { doTypesOverlap } from 'graphql'
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations';
import { Link } from 'react-router-dom'



interface FamilyDetailRelationProps {
    userId: string
}

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
                width: 50%;
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
    console.log(grandChildren);
    

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
                <SubTitle>{partner && (partner?.length > 0) ? 'Married with:'  : 'Single' }</SubTitle>
                {partner && (partner?.length > 0) ? 
                    <DetailSmallContainer>
                        <Link to={`/my-family/${partner[0].relatedFamilyMember.id}`} title={`${partner[0].relatedFamilyMember.firstname} ${partner[0].relatedFamilyMember.lastname}`}>
                            <StyledImgSmall>
                                <img src={peter} alt={`${partner[0].relatedFamilyMember.firstname} ${partner[0].relatedFamilyMember.lastname}`} />
                            </StyledImgSmall>

                            <DetailSmall>
                                <p>{(partner && (partner?.length > 0)) ? `${partner[0].relatedFamilyMember.firstname} ${partner[0].relatedFamilyMember.lastname}` : '' }</p>
                            </DetailSmall>
                        </Link>
                    </DetailSmallContainer>
                : ''}
            </Married>

            <Children>
                <SubTitle>{children && (children?.length > 0) ? 'Children'  : 'No children' }</SubTitle>
                {children && (children?.length > 0) ?
                    <ul>
                        {children?.map((child: any) => (
                            <li>
                                <DetailSmallContainer>
                                    <Link to={`/my-family/${child.relatedFamilyMember.id}`} title={`${child.relatedFamilyMember.firstname} ${child.relatedFamilyMember.lastname}`}>
                                        <StyledImgSmall>
                                            <img src={maria} alt={`${child.relatedFamilyMember.firstname} ${child.relatedFamilyMember.lastname}`} />
                                        </StyledImgSmall>

                                        <DetailSmall>
                                            <p>{child.relatedFamilyMember.firstname} {child.relatedFamilyMember.lastname}</p>
                                            <p>{ calculateAge(child.relatedFamilyMember.dob) } years old</p>
                                        </DetailSmall>
                                    </Link>
                                </DetailSmallContainer>
                            </li>
                        )) }
                    </ul>
                : ''}
            </Children>

            <Children>
                <SubTitle>{grandChildren && (grandChildren?.length > 0) ? 'Grandchildren'  : 'No grandchildren' }</SubTitle>
                {grandChildren && (grandChildren?.length > 0) ?
                    <ul>
                        {grandChildren?.map((child: any) => (
                            <li>
                                <DetailSmallContainer>
                                    <Link to={`/my-family/${child.relatedFamilyMember.id}`} title={`${child.relatedFamilyMember.firstname} ${child.relatedFamilyMember.lastname}`}>
                                        <StyledImgSmall>
                                            <img src={maria} alt={`${child.relatedFamilyMember.firstname} ${child.relatedFamilyMember.lastname}`} />
                                        </StyledImgSmall>

                                        <DetailSmall>
                                            <p>{child.relatedFamilyMember.firstname} {child.relatedFamilyMember.lastname}</p>
                                            <p>{ calculateAge(child.relatedFamilyMember.dob) } years old</p>
                                        </DetailSmall>
                                    </Link>
                                </DetailSmallContainer>
                            </li>
                        )) }
                    </ul>
                : ''}
            </Children>

            <FamilyDetailButtons id={userId} name={data?.familyRelationsByFamilyMemberId[0].familyMember.firstname}/>
        </div>
    )
}

export default FamilyDetailRelation
