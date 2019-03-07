import * as LocalSession from '../utils/LocalSession'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS
} from '../actions/usersAction'

const initialUserState = {
    isLogged: LocalSession.sessionCheck('user'),
    isLogging: false,
    loggingError: false,
    lastUpdated: 0,
    profile: LocalSession.getSession('user') || {}
}


function user(state = initialUserState, action) {
    switch (action.type) {

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLogging: true,
                loggingError: false,
                error: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isLogging: false,
                profile: { ...action.user },
                lastUpdated: new Date()
            }
        case LOGIN_USER_FAILURE:
            return {
                isLogged: false,
                isLogging: false,
                loggingError: true,
                error: action.error,
                lastUpdated: new Date(),
                profile: {}
            }

        default:
            return state
    }
}

export default user