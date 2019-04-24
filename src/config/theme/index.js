import {
    createMuiTheme,
} from '@material-ui/core'

import {
    blue, white
} from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: white
    }, typography: {
        useNextVariants: true,
    }
})