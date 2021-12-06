import React from 'react'
import { calculateAge } from '../../services/format/date'
import styled from 'styled-components'
import { Breakpoint, Shadow } from '../../variables'
import { useQuery } from '@apollo/client'
import { FamilyMemberData, FamilyRelationByIds } from "../../interfaces";
import { GET_FAMILYMEMBER_BY_ID } from "../../graphql/familyMembers";
import { Error, Loading } from '../alerts'
import { parseInt } from 'lodash'
import { GET_RELATION_BY_FAMILYIDS } from '../../graphql/familyRelations';
import FamilyDetailRelation  from './FamilyDetailRelation';

interface FamilyDetailProps {
    userId: string
}

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

const FamilyDetail: React.FC<FamilyDetailProps> = ({ userId }) => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    const { data, loading, error } = useQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    const { data: dataRelation, loading: loadingRelation, error: errorRelation } = useQuery<FamilyRelationByIds>(GET_RELATION_BY_FAMILYIDS, {
        variables: {
            familyMemberId: parseInt(familyMemberId),
            relatedFamilyMemberId: parseInt(userId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;

    if(loadingRelation) return <Loading/>;
    // if(errorRelation) return <Error error={errorRelation.message}/>;

    return (
        <div>
            <DetailTitle>
                <StyledImg >
                    <img src={data?.familyMemberById.image} alt={`${data?.familyMemberById.firstname} ${data?.familyMemberById.lastname}`} />
                </StyledImg>
                
                <DetailInfo>
                    <div>
                        <h2>{data?.familyMemberById.firstname} {data?.familyMemberById.lastname}</h2>
                        <p>{!errorRelation ? dataRelation?.familyRelationsByRelatedAndFamilyMemberId.relationType.name : ''}</p>
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

            <FamilyDetailRelation userId={userId} />
        </div>
    )
}

export default FamilyDetail
