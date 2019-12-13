export default theme => ({
    holder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        height: '100%',
        borderLeft: '1px solid #fff',
        width: '100%',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0
    },
    messagesHolder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        width: '100%',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0
    },
    footer: {
        flexShrink: 0
    },
    footerHolder: {
        display: 'flex'
    },
    inputTextField: {
        flexGrow: 1,
        paddingLeft: 2
    }
})