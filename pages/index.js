import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Kelompok Halo KBPL
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  //  width: theme.spacing(14),
   // height: theme.spacing(14),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login() {
  const classes = useStyles();
  const [usernameField,setUsernameField] = useState('');
  const [passwordField,setPasswordField] = useState('');
  const [errorLoginMsg,setErrorLoginMsg]= useState('');
  const router = useRouter();


  const fieldOnChange = (e)=>{
    if(e.target.name==="username"){
      setUsernameField(e.target.value);
    }else if(e.target.name==="password"){
      setPasswordField(e.target.value);
    }
  }
  

  const signInOnClick = (e)=>{
 
    if(usernameField==="halo" && passwordField==="guest"){
      router.push("/home");
    }else{
      setErrorLoginMsg("Username or password is incorrect.");
    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar src="/others/logo.jpg">
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {errorLoginMsg.length>0 &&
          <Alert severity="error">{errorLoginMsg}</Alert>
        } 
        <form className={classes.form} noValidate>
          <TextField
           // variant="outlined"
          //  margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={fieldOnChange}
          />
          <TextField
           // variant="outlined"
           // margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={fieldOnChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
           {/* <Link href="/home"> */}
           <Button
           // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signInOnClick}
          >
            Sign In
          </Button>
           {/* </Link> */}
          
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
            <Link href="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}