import React from 'react'
import { Route } from "react-router-dom"
import Login from '../../pages/account/Login'
import { useAuth } from '../context/authcontext'


export default function PrivateRoute({ component: Component, loginrequired, ...rest }) {

    const { currentUser } = useAuth()

    if (loginrequired && !currentUser) {
        return <Route {...rest} component={Login}>
        </Route>
    }
    else if (loginrequired && currentUser) {
        return (
            <Route
                {...rest}
                render={props => {
                    return <Component {...props} />
                }}
            >
            </Route>
        )
    } else {
        return (
            <Route
                {...rest}
                render={props => {
                    return <Component {...props} />
                }}
            >
            </Route>
        )
    }

}