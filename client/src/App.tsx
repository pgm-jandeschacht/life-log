import React from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_FAMILYMEMBERS, GET_FAMILY_MEMBER_BY_ID } from './graphql/familyMembers';
import {
    Button
} from './Components';

// ROUTER
import { BrowserRouter, Route, Switch, RouteComponentProps, Link } from 'react-router-dom';

// import { Wrapper } from './App.styles';
import { FamilyMembersData } from './interfaces';
import { gql } from "@apollo/client";
import routes from './config/routes';



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

            <nav>
                <Link to="/"> Go to Home</Link>
                <Link to="/about"> Go to About</Link>
                <Link to="/about-me"> Go to About Me</Link>
                <Link to="/my-agenda"> Go to My Agenda</Link>
                <Link to="/my-album"> Go to My Album</Link>
                <Link to="/my-family"> Go to My Family</Link>
                <Link to="/my-notes"> Go to My Notes</Link>
                <Link to="/wishlist"> Go to Wishlist</Link>
            </nav>

            {/* <Wrapper> */}
                <div className="App">
                    <nav>
                        
                    </nav>
                    <Button/>
                    <ul>
                        <pre>
                        {/* { JSON.stringify(familyMembers, null, " ") } */}
                        </pre>
                        
                    </ul>
                </div>
                
            {/* </Wrapper> */}
        </BrowserRouter>
        
      
  );
}

export default App;
