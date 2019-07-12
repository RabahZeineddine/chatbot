export default theme => ({
    bubble: {
        marginTop: 15,
        maxWidth: '60%',
        minWidth: '10%',
        padding: 5,
        wordWrap: 'break-word'
    },
    applicationBubble: {
        marginLeft: 5,
        backgroundColor: theme.palette.primary[400],
        color: '#fff',
        textAlign: 'left',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    clientBubble: {
        marginRight: 5,
        backgroundColor: '#fff',
        textAlign: 'left',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})