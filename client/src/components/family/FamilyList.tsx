import React from 'react'
import styled from 'styled-components'
import img from '../../assets/images/karina_cox.jpg'
import { Colors, Shadow, Transition } from '../../variables'

import { useQuery } from "@apollo/client";
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';

import { FamilyRelationData, FamilyRelation } from '../../interfaces';

interface FamilyListProps {
    // profiles: any
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

const FamilyList: React.FC<FamilyListProps> = ( ) => {

    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyRelationData>(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    })

    if(loading) return <p>"loading ..."</p>;
    if(error) return <p>"ERRRORRR!!"</p>;


    return (
        <StyledUl>
            { data?.familyRelationsByFamilyMemberId.map((familyRelation: FamilyRelation) => (
                <li key={familyRelation.id}>
                    <a href="/my-family/detail">
                        <StyledImg>
                            <img src={familyRelation.relatedFamilyMember.image} alt={`${familyRelation.relatedFamilyMember.firstname} ${familyRelation.relatedFamilyMember.lastname}`} />
                        </StyledImg>

                        <StyledDiv>
                            <p>{familyRelation.relatedFamilyMember.firstname} {familyRelation.relatedFamilyMember.lastname}</p>
                            <p>{familyRelation.relationType.name}</p>
                        </StyledDiv>
                    </a>
                </li>
            )) }
        </StyledUl>
    )
}

export default FamilyList
