import React, { useEffect, useState} from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_USERID, GET_FAMILYMEMBER_BY_ID } from './graphql/familyMembers';

import { FamilyMember, FamilyMembersData, FamilyMemberData }from './interfaces';

// ROUTER
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

// import { Wrapper } from './App.styles';
import routes from './config/routes';
import GlobalStyle from './globalStyle';

import { Login } from './components/Login';
import { updateFunctionTypeNode, validateLocaleAndSetLanguage } from 'typescript';
import useToken from './Hooks/useToken';
import e from 'cors';
import useFamilyMember from './Hooks/useFamilyMember';



function App() {
    // LOGIN & TOKEN FROM LOCAL STORAGE
    // const token = getToken();
    
    const {  token, setToken } = useToken();
    const {  familyMember, setFamilyMember } = useFamilyMember();
    // const {  familyMember, setFamilyMember } = useFamilyMember();
    // const [familyMember, setFamilyMember] = useState<FamilyMember | null>(null);
    // const  [userId, setUserId] = useState(null);


    // const [ getFamilyMembers,  { loading, error, data }] = useLazyQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_USERID, {
    //         fetchPolicy: 'cache-first',
    //         // variables: {
    //         //     id: 2
    //         // }
    //     });

    console.log('------');
    console.log(token);
    console.log('------');

    // if(!familyMember) {
    //     return <Login setToken={setToken} />
    // }

    useEffect(():any => {
        if(token) {
            console.log('TOKEN ID', token.user.id);
            const { loading, error, data } = useQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_USERID, {
                fetchPolicy: 'cache-first',
                variables: {
                    id: token.user.id
                }
            });
            if(loading) console.log("loading ...");
            if(error) console.log("ERRRORRR!!");
            
            if(data){
                console.log('++++++');
                console.log(data);
                // localStorage.setItem('familyMemberId', JSON.stringify(data));
                console.log('++++++');
            }

        }
    }, [token]);
    // useEffect(():any => {
    //     if(token && localStorage.getItem('token') ) {
    //         const userString = localStorage.getItem('token');
    //         if( userString ) {
    //             const userStringa = JSON.parse(userString);
    //             const userId = userStringa.userId;
    //             getFamilyMembers({ variables: { id: userId } });
                
    //             if(loading) return <p>"loading ..."</p>;
    //             if(error) return <p>"ERRRORRR!!"</p>;
    //             // setFamilyMember(data?.familyMemberByUserId);
    //             console.log('TOKEN', token);
    //             console.log(data?.familyMemberByUserId);
    //             setFamilyMember(data?.familyMemberByUserId);
    //         } 
            
    //         return (
    //             <p>
    //                 { data?.familyMemberByUserId.firstname } 
    //             </p>
    //         )
    //     }
    // }, [token]);

    useEffect(() => {
        if(!localStorage.getItem('familyMemberId') ) {
            localStorage.setItem('familyMemberId', JSON.stringify(familyMember));
        }
    }, [familyMember]);

    
    
    
    // if(!token) {
    //     return (
    //     <>
    //         <Login setToken={setToken} />
    //         no token
    //     </>
    //     )
        
    // }
    




    // first is name of function, second is the function itself
    // const  [userId, setUserId] = useState(null);
    // const [ getFamilyMembers,  { loading, error, data }] = useLazyQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_USERID, {
    //     fetchPolicy: 'cache-first',
    //     variables: {
    //         id: 2
    //     }
    // });

    // getFamilyMemberInfo({ variables: { id: 1 } })
    // console.log(getFamilyMemberInfoData);

    // if(loading) return <p>"loading ..."</p>;
    // if(error) return <p>"ERRRORRR!!"</p>;
    // console.log(data);

    // if no data, button else data list
    // return !data ? (
    //     <button onClick={ () => getFamilyMembers()}>
    //         Get Family Members
    //     </button>
    // ) : (
        
    //     <p>
    //         { data.familyMemberByUserId.firstname }
    //     </p>
    // )




    return (
    <>
                {( !token  ) ? (
                        <Login setToken={setToken} setFamilyMember={setFamilyMember} />
                    ) : (
                    <p> TOKEN SET</p>
                    )}
                    
                   {( !familyMember ) ? (
                        <p> FAMILY MEMBER NOT SET</p>
                   ) : (
                       <>
                        <p>{ familyMember.firstname }</p>
                        <p>{ familyMember.lastname }</p>
                       </>
                   )} 

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
            


        </BrowserRouter>

        
    </>
  );
}

export default App;
