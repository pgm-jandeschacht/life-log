import React, { ReactElement } from 'react';
import { GET_FAMILYMEMBERINFO_BY_ID } from "../../graphql/familyMembers";
import { FamilyMemberData } from "../../interfaces";
import { useQuery } from "@apollo/client";
import { Error, Loading } from '../alerts';
import { Breakpoint } from '../../variables';
import styled from 'styled-components';

const Greeting = styled.div`
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    @media (min-width: ${Breakpoint.small}) {
        padding: 3rem 0;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 4rem 0;
    }
    @media (min-width: ${Breakpoint.large}) {
        justify-content: center;
    }
    
    div:first-of-type {
        width: 66.6%;
        padding-right: 1rem;
        @media (min-width: ${Breakpoint.medium}) {
            width: 70%;
        }
        @media (min-width: ${Breakpoint.large}) {
            width: auto;
            margin-right: 7.5rem;
        }
        
        p {
            font-weight: 900;
            font-size: 1.35rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 1.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 2rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 2.5rem;
            }
        }
        
        h1 {
            font-weight: 900;
            font-size: 2rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 2.2rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 3rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                font-size: 4rem;
            }
        }
    }
    
    div:last-of-type {
        width: 33.3%;
        height: 0;
        padding-bottom: 33.3%;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        @media (min-width: ${Breakpoint.medium}) {
            padding-bottom: 30%;
            width: 30%;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding-bottom: 20%;
            width: 20%;
        }
        
        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

const FamilyMemberInfo: React.FC = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    
    const { data, loading, error } = useQuery<FamilyMemberData >(GET_FAMILYMEMBERINFO_BY_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    const getGreeting = (date: Date): string => {
        const hours = date.getHours();
        if(hours < 12) return "morning";
        if(hours < 18) return "afternoon";
        return "evening";
    }
    const greeting = new Date();

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;

    return (
        <Greeting>
            <div>
                <p>Good {getGreeting(greeting)}</p>

                <h1>{data?.familyMemberById.firstname}</h1>
            </div>

            <div>
                <img src={data?.familyMemberById.image} alt={data?.familyMemberById.firstname} />
            </div>
        </Greeting>
    )
}

export default FamilyMemberInfo
