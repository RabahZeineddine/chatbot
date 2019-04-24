import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import style from './style'
import Header from './Header';
import TabsComponent from './TabsComponent'

class Chat extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.holder}>
                <Header />
                <TabsComponent />
            </div>
        )
    }
}


export default withStyles(style)(Chat)