export default theme => ({
    holder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        height: '100%',
        borderLeft: '1px solid #fff',
        width: '100%',
        flex: '1 0'
    },
    messagesHolder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        width: '100%',
        flex: '1 0'
    },
    footer: {
    },
    footerHolder: {
        display: 'flex'
    },
    inputTextField: {
        flexGrow: 1,
        paddingLeft: 2
    }
})