import { env, headers } from '../config'
import ErrorHandler from './ErrorHandler';
import { getSession } from './LocalSession';


export const send = async (message) => {
    console.log(env)
    let params = {}
    let session_id = ''
    let context = {}
    try {
        session_id = getSession('session_id') || ''
        context = getSession('context') || {}
        params = {
            session_id,
            context,
            message
        }
    } catch (err) {
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
        console.log('Um erro ocorreu')
        console.log(error)
        throw new ErrorHandler(400).format()
    })
}