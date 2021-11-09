import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_FAMILYMEMBERS, GET_FAMILY_MEMBER_BY_ID } from './graphql/familyMembers';
import {
    Button
} from './components/buttons';

// ROUTER
import { BrowserRouter, Route, Switch, RouteComponentProps, Link } from 'react-router-dom';

// import { Wrapper } from './App.styles';
import { FamilyMembersData } from './interfaces';
import { gql } from "@apollo/client";
import routes from './config/routes';
import GlobalStyle from './globalStyle';



function App() {
    // const { loading, error, data } = useQuery<FamilyMembersData>(GET_ALL_FAMILYMEMBERS, {
    //     fetchPolicy: "cache-first"
    // });
    // const {
    //     data,
    //     loading,
    //     error
    // } = useQuery(GET_ALL_FAMILYMEMBERS);


    


    // if(loading) return <p>"loading ..."</p>;
    // if(error) return <p>"ERRRORRR!!"</p>;

    // const familyMembers = data?.familyMembers;
    // console.log(familyMembers);


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

            {/* <Wrapper> */}
                {/* <div className="App">
                    <nav>
                        
                    </nav>
                    <Button onClick={e => console.log("Clicked")}>
                        Click me!
                    </Button>
                    <ul>
                        <pre> */}
                        {/* { JSON.stringify(familyMembers, null, " ") } */}
                        {/* </pre>
                        
                    </ul>
                </div> */}
                
            {/* </Wrapper> */}
        </BrowserRouter>
        
    </>
  );
}

export default App;
