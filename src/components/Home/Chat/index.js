import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import style from './style'
import Header from './Header';
import ChatBody from './ChatBody'

class Chat extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.holder}>
                <Header />
                <ChatBody />
            </div>
        )
    }
}


export default withStyles(style)(Chat)