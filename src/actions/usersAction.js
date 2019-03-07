import * as UserAPI from '../utils/usersAPI'
import * as LocalSession from '../utils/LocalSession'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'


const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user
    }
}

const loginUserFailure = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        error
    }
}

export const login = (user) => dispatch => {
    dispatch(loginUserRequest())
    return UserAPI
        .login(user)
        .then(loggedUser => {
            LocalSession.setSession('user', loggedUser)
            return dispatch(loginUserSuccess(loggedUser))
        })
        .catch(err => dispatch(loginUserFailure(err)))
}