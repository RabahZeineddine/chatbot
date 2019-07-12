import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/usersAction'
import style from './style'

import {
    Grid,
    withStyles,
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button,
    CircularProgress
} from '@material-ui/core'


class Login extends Component {

    state = {
        username: {
            error: false,
            value: ''
        },
        password: {
            error: false,
            value: ''
        }
    }

    handleInputChange = key => event => {
        let value = event.target.value
        this.setState((state) => ({
            [key]: {
                ...state[key],
                value
            }
        }))
    }

    handleSubmit = event => {

        event.preventDefault()
        const username = this.state.username.value
        const password = this.state.password.value
        const user = { username, password }

        this.props.login(user)
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        const { classes, user } = this.props
        const { isLogging } = user
        return (
            <Grid container alignItems="center" justify="center" className={classes.root}>
                <Grid item xs={10} sm={6} lg={4} >
                    <Card>
                        <CardHeader title="Login" />
                        <CardContent>
                            <div className={classes.error}>{user.loggingError ? user.error.detail : ' '}</div>
                            < form noValidate autoComplete="off" className={classes.container} onSubmit={this.handleSubmit}>
                                <TextField
                                    id="username"
                                    label="Username"
                                    className={classes.textField}
                                    value={this.state.username.value}
                                    margin="normal"
                                    onChange={this.handleInputChange('username')}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    className={classes.textField}
                                    margin="normal"
                                    value={this.state.password.value}
                                    onChange={this.handleInputChange('password')}
                                />
                                <Button variant="contained" color="primary" type="submit" className={classes.loginBtn}>
                                    {!isLogging ? 'Login'
                                        : <CircularProgress color="inherit" size={24} />
                                    }
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(style)(Login))