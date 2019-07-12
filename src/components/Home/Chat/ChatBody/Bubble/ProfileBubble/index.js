import React, { Component } from 'react'
import style from './style'
import {
    withStyles
} from '@material-ui/core'



import botImage from '../../../../../../assets/images/bot.png'
import manUser from '../../../../../../assets/images/man-user.png'

class ProfileBubble extends Component {

    render() {

        const { classes, message } = this.props

        return (
            <div className={`${classes.holder} ${classes[message.user]}`}>
                <img className={classes.icon} src={message.user === 'client' ? manUser : botImage} alt="Profile" />
                <span className={classes.time}>{this.getTime()}</span>
            </div>
        )
    }

    getTime() {
        const timestamp = this.props.message.date
        if (timestamp) {
            let date = new Date(timestamp)
            return `${date.getHours()}:${ date.getMinutes()<10?'0':''}${date.getMinutes()}`
        }
        return ``

    }
}

export default withStyles(style)(ProfileBubble)