import React, { Component } from 'react'
import { withStyles, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import style from './style'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sendMessage } from '../../../../../../actions/messagesAction';

class ListBubble extends Component {

    static propTypes = {
        message: PropTypes.object.isRequired
    }

    state = {
        disabled: false
    }

    handleClick = (value) => {
        this.props.sendMessage({
            type: 'text',
            date: new Date().getTime(),
            user: 'client',
            value: value
        })
        this.setState({ disabled: true })
    }

    render() {

        const { classes, message } = this.props

        return (
            <div className={`${classes.bubble} ${classes[`${message.user}Bubble`]}`}>
                {message.title != '' && (
                    <h3>{message.title}</h3>
                )}
                {message.options && message.options.length > 0 && (
                    <List component="nav" className={classes.list}>
                        {message.options.map((option, index) => (
                            <ListItem
                                button
                                key={index}
                                classes={{ root: classes.listItem }}
                                disabled={option.value !== '' ? this.state.disabled : true}
                                onClick={() => this.handleClick(option.value)}
                            >
                                <ListItemText
                                    primary={option.label}
                                    classes={{ primary: classes.listItemText }}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(withStyles(style)(ListBubble))