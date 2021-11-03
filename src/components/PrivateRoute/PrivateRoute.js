import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {

    const {user, isLoading} = useAuth();
    console.log(user);

    if(isLoading){
        return <Spinner animation="grow" variant="primary" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
            }
        />
    );
};

export default PrivateRoute;