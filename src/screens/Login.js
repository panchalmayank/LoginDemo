import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import FormContol from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLable from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = (theme) => ({
    main: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    gird: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 100
    },
    card: {
        maxWidth: 500,
        height: 450,
        justifyContent: 'center',
        alignContent: 'center',

    },
    cardHeader: {
        paddingTop: 50,
        fontFamily: "Roboto",
    },
    form: {
        margin: theme.spacing.unit,

    },
    inputLable: {
        '&$inputFocused': {
            color: blue[700]
        }
    },
    inputFocused: {},
    inputUnderline: {
        '&after': {
            borderBottomColor: blue[400],
        },
        width: 280,
    },
    buttonContent: {
        paddingTop: 50
    },
    button: {
        width: 130,
        height: 40
    },
    signupText: {
        fontFamily: "Roboto",
        paddingTop: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
});

class Login extends Component {
    state = {
        email: '',
        password: '',
        isOpen: false,
        isUserlogin: false,
    };
    componentDidMount() {
        console.log('componentDidMount');
        let person = localStorage.getItem('email');
        if(person !== null){
            this.setState({
                isUserlogin:true
            })
        }
        // else{
        //     alert('email is not valid');
        // }
        console.log(person);
    }
    changeEmail = (event) => {
        console.log('changeEmail');
        this.setState({
            email: event.target.value
        })
    };
    changePassword = (event) => {
        console.log('changePassword');
        this.setState({
            password: event.target.value
        })
    };
    handleLogin = () => {
        console.log('handleLogin');
        localStorage.setItem('email',this.state.email);
        if (this.state.email === 'admin' && this.state.password === 'admin') {
            this.setState({
                email: '',
                password: '',
                isOpen: true,
                isUserlogin:true,
            });
        }
        else {
             alert('Unsuccessful');
             this.setState({
                 isUserlogin:false
             })
        }
    };
    handleLogout = () => {
      console.log('handlelogout');
      localStorage.removeItem('email');
      this.setState({
          isUserlogin:false
      })
    };
    handleClose = () => {
        this.setState({isOpen: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                {(!this.state.isUserlogin ? <div className={classes.main}>
                            <Grid container
                                  direction="column"
                                  className={classes.grid}>
                                <Grid item xs={12}>
                                    <Grid container
                                          direction="row"
                                          justify="space-around">
                                        <Grid item xs={12}>
                                            <Card className={classes.card}>
                                                <CardHeader title="Login" className={classes.cardHeader}/>
                                                <CardContent>
                                                    <div>
                                                        <FormContol className={classes.form}>
                                                            <InputLable htmlFor="custom-css-stadard-input"
                                                                        classes={{
                                                                            root: classes.inputLable,
                                                                            focused: classes.inputFocused
                                                                        }}
                                                            >Email</InputLable>
                                                            <Input id="custom-css-standard-input"
                                                                   classes={{
                                                                       underline: classes.inputUnderline
                                                                   }}
                                                                   value={this.state.email}
                                                                   onChange={this.changeEmail}
                                                            />
                                                        </FormContol>
                                                    </div>
                                                    <div>
                                                        <FormContol>
                                                            <InputLable htmlFor="custom-css-stadard-input1"
                                                                        classes={{
                                                                            root: classes.inputLable,
                                                                            focused: classes.inputFocused
                                                                        }}
                                                            >Password</InputLable>
                                                            <Input id="custom-css-standard-input1"
                                                                   classes={{
                                                                       underline: classes.inputUnderline
                                                                   }}
                                                                   type="password"
                                                                   value={this.state.password}
                                                                   onChange={this.changePassword}
                                                            />
                                                        </FormContol>
                                                    </div>
                                                    <div className={classes.buttonContent}>
                                                        <Button color="primary" variant="contained" onClick={this.handleLogin}
                                                                className={classes.button}>Login</Button>
                                                    </div>
                                                    <div className={classes.signupText}>
                                                        <Typography>
                                                            Don't have an account<Button color="primary"> Signup</Button>
                                                        </Typography>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        : <div>
                            <div >
                                <AppBar position="static">
                                    <Toolbar>
                                        <Typography variant="h6" color="inherit">
                                            WELCOME
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </div>
                            <div className={classes.buttonContent} >
                                <Button color="primary" variant="contained" className={classes.button}
                                        onClick={this.handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </div>
                ) }
                <div>
                    <Dialog
                        open={this.state.isOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dailog-title"
                        arie-describedby="alert-dailog-description">
                        <DialogTitle id="alert-dailog-title">Successful</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dailog-description">
                                You have successfully Login
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);