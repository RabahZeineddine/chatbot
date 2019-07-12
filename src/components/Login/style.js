export default theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        width: '90%',
    },
    loginBtn: {
        marginTop: '32px',
        marginBottom: '8px',
        width: '90%'
    },
    error: {
        minHeight: '18px',
        color: '#F00',
        textAlign: 'center'
    }
})