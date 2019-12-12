import { env, headers } from '../config'
import ErrorHandler from './ErrorHandler';
import { getSession } from './LocalSession';

export const send = async (message) => {

    let params = {}
    let sessionId = ''
    let context = {}

    try {
        sessionId = getSession('sessionId') || ''
        context = getSession('context') || {}
        params = {
            sessionId,
            context,
            message
        }
    } catch (err) {
        console.error(err)
        throw new ErrorHandler(400).format()
    }

    return fetch(`${env.API}/api/v1/web/message`, {
        headers,
        method: 'POST',
        body: JSON.stringify(params)
    }).then(res => {
        console.log(res)
        if (!res.ok) {
            throw new ErrorHandler(res.status).format()
        } else {
            return res.json()
        }
    }).catch(error => {
        console.log(error)
        throw new ErrorHandler(400).format()
    })
}