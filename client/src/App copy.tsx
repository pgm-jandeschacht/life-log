import React, { useEffect, useState} from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_FAMILYMEMBER_BY_USERID, GET_ALL_FAMILYMEMBERS } from './graphql/familyMembers';
import { FamilyMembersData }from './interfaces';

// import { GET_ALL_FAMILYMEMBERS, GET_FAMILY_MEMBER_BY_ID } from './graphql/familyMembers';

// ROUTER
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

// import { Wrapper } from './App.styles';
// import { FamilyMembersData } from './interfaces';
// import { gql } from "@apollo/client";
import routes from './config/routes';
import GlobalStyle from './globalStyle';

import { Login } from './components/Login';
import { updateFunctionTypeNode, validateLocaleAndSetLanguage } from 'typescript';
import useToken from './Hooks/useToken';



function App() {
    // const { loading, error, data } = useQuery<FamilyMembersData>(GET_FAMILYMEMBER_BY_USERID, {
    //     fetchPolicy: 'cache-first'
    // });
    
    
    // const { loading, error, data } = useQuery<FamilyMembersData>(GET_FAMILYMEMBER_BY_USERID, {
    //     fetchPolicy: "cache-first"
    // });
    // const {
    //     data,
    //     loading,
    //     error
    // } = useQuery(GET_ALL_FAMILYMEMBERS);


    // const familyMembers = data?.familyMembers;
    // console.log(familyMembers);



    // LOGIN & TOKEN FROM LOCAL STORAGE
    // const token = getToken();
    
    // const {  token, setToken } = useToken();
    // console.log('------');
    // console.log(token);
    // console.log('------');

    // if(!token) {
    //     return (
    //     <>
    //         <Login setToken={setToken} />
    //         no token
    //     </>
    //     )
        
    // }





    const { loading, error, data } = useQuery<FamilyMembersData>(GET_ALL_FAMILYMEMBERS, {
        fetchPolicy: 'cache-first'
    });

    // const [ getFamilyMemberInfo, { loading, error, data: getFamilyMemberInfoData } ] = useLazyQuery<FamilyMembersData>(GET_FAMILYMEMBER_BY_USERID);

    
    // useEffect(() => {
    //     if(getFamilyMemberInfoData?.familyMemberByUserId) {
    //         console.log(getFamilyMemberInfoData.familyMemberByUserId);
    //     }
    // }, [getFamilyMemberInfoData])

    // getFamilyMemberInfo({ variables: { id: 1 } })
    // console.log(getFamilyMemberInfoData);

    if(loading) return <p>"loading ..."</p>;
    if(error) return <p>"ERRRORRR!!"</p>;
    console.log(data);




    return (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                { routes.map((route, index) => {
                    return (
                        <Route 
                        
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component
                                    name={ route.name }
                                    {...props}
                                    {...route.props}
                                />
                            )}
                        />
                    );
                } ) }
            </Switch>
            <ul>
            {/* { JSON.stringify(data, null, " ") } */}
            { data?.familyMembers.map((familyMember, index) => {
                return (
                    <li key={index}>
                        <p>{familyMember.firstname}</p>
                        {/* <p>{familyMember.lastName}</p>
                        <p>{familyMember.email}</p>
                        <p>{familyMember.phone}</p> */}
                    </li>
                )
            })}
            </ul>


        </BrowserRouter>
        
    </>
  );
}

export default App;
