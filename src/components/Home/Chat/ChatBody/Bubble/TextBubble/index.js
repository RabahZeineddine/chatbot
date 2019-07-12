import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import style from './style'
import PropTypes from 'prop-types'

class TextBubble extends Component {

    static propTypes = {
        message: PropTypes.object.isRequired
    }

    filterText = (text) => {
        let elements = []
        // Check for links 
        let links = text.match(/<link(.*?)\/>/gi)
        if (links) {
            links = links.map(link => ({
                href: /href="(.*?)"/gi.exec(link)[1],
                label: /label="(.*?)"/gi.exec(link)[1],
                target: /target="(.*?)"/gi.exec(link)[1],
              }))
            elements = text.replace(/(<link.*\/>)/gi, '<link>').split('<link>')
            links.forEach((link, index) => {
                elements.splice((2 * index) + 1, 0, (<a href={link.href} target={link.target} key={index} >{link.label}</a>))
            })
            return elements
        }else{
            return text
        }


    }

    render() {

        const { classes, message } = this.props

        return (
            <div className={`${classes.bubble} ${classes[`${message.user}Bubble`]}`}>
                {this.filterText(message.value)}
            </div>
        )
    }
}

export default withStyles(style)(TextBubble)