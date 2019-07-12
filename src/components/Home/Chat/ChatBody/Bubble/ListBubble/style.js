export default theme => ({
    bubble: {
        marginTop: 15,
        maxWidth: '60%',
        minWidth: '10%',
        padding: 5,
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'column'
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
    },
    list: {

    },
    listItem: {
        padding: 0
    },
    listItemText: {
        color: "#fff",
        fontSize: '11pt',
        padding: '5px 5px',
        "&::before": {
            content: '" "',
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            border: '1px solid #fff',
            backgroundColor: 'transparent',
            marginRight: 5
        }
    }
})