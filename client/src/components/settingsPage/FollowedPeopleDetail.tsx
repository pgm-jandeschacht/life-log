import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations'
import { FamilyMember, FamilyRelationData } from '../../interfaces'
import { Breakpoint, Colors, Transition } from '../../variables'
import { Error, Loading } from '../alerts'

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`

const StyledForm = styled.form`
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;

    label {
        cursor: pointer;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 0.75rem;
            margin-right: 0.75rem;
        } 
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            margin-right: 1rem;
        } 
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 0.75rem;
            margin-right: 0.75rem;
        } 
        
        input {
            visibility: hidden;
            position: absolute;
            
            &:checked {
                & + span {
                    background: ${Colors.primary};
                    color: ${Colors.secondary};
                }
            }
        }
        
        span {
            background: ${Colors.secondary};
            padding: 0.6rem 1.2rem ;
            font-weight: 700;
            font-size: 1.2rem;
            transition: ${Transition.normal};
            border-radius: 10px;
            display: block;
            @media (min-width: ${Breakpoint.small}) {
                padding: 0.75rem 1.5rem ;
                font-size: 1.5rem;
            } 
            @media (min-width: ${Breakpoint.medium}) {
                padding: 1rem 2rem ;
                font-size: 2rem;
            } 
            @media (min-width: ${Breakpoint.large}) {
                padding: 0.75rem 1.5rem ;
                font-size: 1.5rem;
            } 
        }
        
        &:hover {
            span {
                transform: translateY(-5px);
                background: ${Colors.ternary};
            }
        }
    }
`

const FollowedPeople: React.FC = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    let peopleIFollow: FamilyMember[] = [];
    let peopleIDontFollow: FamilyMember[] = [];

    const { data, loading, error } = useQuery<FamilyRelationData>(GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading />;
    if(error) return <Error error={error.message}/>;
    if(!loading && data) {
        data.familyRelationsByFamilyMemberId.forEach(relation => {
            if(relation.hidePictures){
                peopleIDontFollow.push(relation.relatedFamilyMember);
            } else {
                peopleIFollow.push(relation.relatedFamilyMember);
            }
    })};

    
    return (
        <>
        <StyledDiv>
            <h2>People You follow</h2>
            <StyledForm>
                {peopleIFollow.map(familyMember => (
                    <label htmlFor={familyMember.id.toString()}>
                        <input id={familyMember.id.toString()} value={familyMember.id.toString()} type="checkbox" />
                        <span>{ familyMember.firstname }  { familyMember.lastname }</span>
                    </label>
                ))}
            </StyledForm>
        </StyledDiv>

        <StyledDiv>
            <h2>People You don't follow</h2>
            <StyledForm>
                { peopleIDontFollow && peopleIDontFollow.length > 0 ?  peopleIDontFollow.map(familyMember => (
                    <label htmlFor={familyMember.id.toString()}>
                        <input id={familyMember.id.toString()} value={familyMember.id.toString()} type="checkbox" />
                        <span>{ familyMember.firstname }  { familyMember.lastname }</span>
                    </label>
                )): <p>You are following everyone from your family</p>}
            </StyledForm>
        </StyledDiv>
        </>
    )
}

export default FollowedPeople
