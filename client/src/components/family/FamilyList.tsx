import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
import { Error, Loading } from '../alerts'
import FamilyListItem from './FamilyListItem'
import { useQuery } from "@apollo/client";
import { GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';
import { FamilyRelationData, FamilyRelation } from '../../interfaces';
import { Link } from 'react-router-dom'

interface FamilyListProps {
    isHome?: boolean
}

const StyledUl = styled.ul`
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        flex-wrap: wrap;
    }
`

const StyledAnchor = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    @media (min-width: ${Breakpoint.medium}) {
        margin-top: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin: auto;
        margin-top: 0.5rem;
    }

    a {
        background: ${Colors.accent2};
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.6rem 1.2rem;
        border-radius: 10px;
        transition: ${Transition.normal};
        box-shadow: ${Shadow.small};
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 1.75rem;
            padding: 1rem 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent2};
            box-shadow: ${Shadow.large};
        }
    }
`

const FamilyList: React.FC<FamilyListProps> = ({ isHome = false }) => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<FamilyRelationData>(GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    })

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;

    return (
        <StyledUl>
            { data?.familyRelationsByFamilyMemberId.map((familyRelation: FamilyRelation, index) => (
                isHome && index > 3 ? '' : 
                <FamilyListItem isGrey={isHome} familyMember={familyRelation} />
            )) }

            {
                isHome ? 
                <StyledAnchor>
                    <Link to={"/my-family/"} title={"My family"}>See all family members</Link>
                </StyledAnchor>
                : ''
            }
        </StyledUl>
    )
}

export default FamilyList
