import { env, headers } from '../config'
import ErrorHandler from './ErrorHandler';


export const login = async (user) => {
    return fetch(`${env.API}/api/v1/web/auth/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify(user)
    }).then(res => {
        if (!res.ok) {
            throw new ErrorHandler(res.status).format()
        } else
            return res.json()
    })
}