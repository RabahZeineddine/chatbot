import { env, headers } from '../config'
import ErrorHandler from './ErrorHandler';

export const send = async (message) => {
    return fetch(`${env.API}/api/v1/web/message`, {
        headers,
        method: 'POST',
        body: JSON.stringify(message)
    }).then(res => {
        console.log(res)
        if (!res.ok) {
            throw new ErrorHandler(res.status).format()
        } else {
            return res.json()
        }
    }).catch(error => {
        throw new ErrorHandler(400).format()
    })
}