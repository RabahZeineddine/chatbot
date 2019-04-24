export default theme => ({
    holder: {
        width: '350px',
        height: '80%',
        bottom: '0',
        right: '0',
        position: 'absolute',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '100%',
            top: '0'
        }
    }
})