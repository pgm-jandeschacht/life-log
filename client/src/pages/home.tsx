import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { useFetch } from '../Hooks'
import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID } from "../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../interfaces";
import { Loading, Error } from "../components/alerts";
import  FamilyMemberInfo from "../components/FamilyMember/FamilyMemberInfo";
import { AgendaList } from "../components/agenda";
import styled from "styled-components";
import { WishList } from "../components/wishlist";
import { Breakpoint, Colors } from "../variables";
import { FamilyList } from "../components/family";

const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1.5rem;
        font-size: 1.75rem;
    }
    `

const Grey = styled.div`
    background: ${Colors.secondary};
    padding: 1rem;
    border-radius: 20px;
    margin-bottom: 2rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 3rem;
        padding: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 2rem;
        padding: 1.5rem;
    }
`

const HomePage: React.FunctionComponent<Ipage> = props => {    
    return (
        <BaseLayout PageTitle={"Home"} isHome={true}>
            <FamilyMemberInfo/>

            <Grey>
                <SubTitle>Agenda items</SubTitle>
                <AgendaList isHome={true}/>
            </Grey>

            <Grey>
                <SubTitle>Wishes</SubTitle>
                <WishList isHome={true}/>
            </Grey>

            <Grey>
                <SubTitle>My Family</SubTitle>
                <FamilyList isHome={true}/>
            </Grey>
        </BaseLayout>
    )
}

export default HomePage;