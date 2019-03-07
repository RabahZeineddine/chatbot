import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PublicRoute({ component: Component, ...rest }) {


    return <Route
        {...rest}
        render={props =>
            !rest.user.isLogged ? (
                <Component {...props} />
            )
                : (
                    <Redirect
                        to={{
                            pathname: "/",
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


export default connect(mapStateToProps)(PublicRoute)