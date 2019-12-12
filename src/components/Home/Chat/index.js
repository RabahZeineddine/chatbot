import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import style from './style'
import Header from './Header';
import Chatbody from './Chatbody';


class Chat extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.holder}>
                <Header />
                <Chatbody />
            </div>
        )
    }
}


export default withStyles(style)(Chat)