import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {


    return <Route
        {...rest}
        render={props =>
            !rest.user.isLogged ? (
                <Component {...props} />
            )
                : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}


export default connect(mapStateToProps)(PrivateRoute)