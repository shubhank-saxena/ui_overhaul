import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    // overflowX: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
        // justifyContent: 'space-around',
        // display: 'flex',
        //  margin: 'auto',
        // width: '70%',
        // paddingTop: '1%',
        // paddingBottom: '1%',
        // fontSize: '1.3em',
        // fontWeight: '300'
    },
    toolbar: {
        display: 'flex',
        paddingRight:'50%',
        paddingLeft:'20%'
    },
    button: {
         justifyContent: 'space-around',
        display: 'flex',
         margin: 'auto',
        width: '70%',
        paddingTop: '1%',
        paddingBottom: '1%',
        fontSize: '1.5em',
        fontWeight: '300',
        paddingRight:'20%',
        textDecoration:'none',
        color: 'black'
    }
  }));

const Nav = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" color="white" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.button}>Home</Link>
          <Link to='/' className={classes.button}>About</Link>
          <Link to='/' className={classes.button}>Team</Link>
          <Link to='/' className={classes.button}>Events</Link>
          <Link to='/' className={classes.button}>Contact</Link>
          <Link to='/' className={classes.button}>Achievements</Link>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Nav
