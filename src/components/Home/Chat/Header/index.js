import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import style from './style'

class Header extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.header}> Chat </div>
        )
    }
}

export default withStyles(style)(Header)