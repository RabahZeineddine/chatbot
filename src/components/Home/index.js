import React, { Component } from 'react'
import {
    withStyles
} from '@material-ui/core'
import styles from './style'
import Chat from './Chat'


class Home extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.root}>
                <Chat />
            </div>
        )
    }
}


export default withStyles(styles)(Home)