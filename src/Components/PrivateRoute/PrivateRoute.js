import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isSignedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
