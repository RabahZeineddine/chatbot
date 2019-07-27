import development from './development'
import production from './production'
import quality_assurance from './quality_assurance'

console.log(process.env.NODE_ENV)

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
    development: {
        ...development,
        NODE_ENV
    },
    test: {
        ...quality_assurance,
        NODE_ENV
    },
    production: {
        ...production,
        NODE_ENV
    }
}


export default config[NODE_ENV]