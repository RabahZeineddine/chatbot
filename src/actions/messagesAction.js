import * as MessagesAPI from '../utils/messagesAPI'
import * as LocalSession from '../utils/LocalSession'

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'

const sendMessageRequest = (message) => {
    return {
        type: SEND_MESSAGE_REQUEST,
        message
    }
}

const sendMessageFailure = (error) => {
    return {
        type: SEND_MESSAGE_FAILURE,
        error
    }
}

const sendMessageSuccess = (messages) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        messages
    }
}

export const sendMessage = (message) => dispatch => {
    dispatch(sendMessageRequest(message))
    return MessagesAPI
        .send(message)
        .then(results => {
            let sessionMessages = LocalSession.getSession('messages') || []
            
            if (!message.firstMessage) {
                LocalSession.setSession('messages', sessionMessages.concat([message], results.messages))
            } else {
                LocalSession.setSession('messages', sessionMessages.concat(results.messages))
            }

            LocalSession.setSession('sessionId', results.sessionId)
            LocalSession.setSession('context', results.context)
            return dispatch(sendMessageSuccess(results.messages))
        })
        .catch(error => dispatch(sendMessageFailure(error)))
}