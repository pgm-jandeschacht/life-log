import React, { useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID } from "../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../interfaces";

import  FamilyMemberInfo from "../components/FamilyMember/FamilyMemberInfo";


const HomePage: React.FunctionComponent<Ipage> = props => {

    // const familyMemberId = localStorage.getItem('familyMemberId') || '';

        return (
        <BaseLayout PageTitle={"Home"} >
            
            <p>This is the HOME page!</p>
            
            <FamilyMemberInfo/>    
            
        </BaseLayout>
    )
}

export default HomePage;