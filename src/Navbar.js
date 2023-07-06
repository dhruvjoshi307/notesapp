import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  '&:hover': {
    transform: 'scale(1.05)',
  }
 
}));    

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo} style={{fontFamily:"Signika Negative"}}>
          DUMMY NOTES
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
