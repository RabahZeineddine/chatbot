import {
    createMuiTheme,
} from '@material-ui/core'

import {
    blue
} from '@material-ui/core/colors'
import { white } from './colors'

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: white
        }
    }, typography: {
        useNextVariants: true,
    }
})