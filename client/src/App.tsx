import React, { useEffect, useState} from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';


// ROUTER
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import routes from './config/routes';
import GlobalStyle from './globalStyle';

// import { Login } from './components/Login';

function App() {
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
            


        </BrowserRouter>

        
    </>
  );
}

export default App;
