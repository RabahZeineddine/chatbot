import development from './development'
import production from './production'
import quality_assurance from './quality_assurance'

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
    development: {
        ...development,
        NODE_ENV
    },
    quality_assurance: {
        ...quality_assurance,
        NODE_ENV
    },
    production: {
        ...production,
        NODE_ENV
    }
}


export default config[NODE_ENV]