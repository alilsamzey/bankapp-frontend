import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom"
import logo from "../images/logo.png"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant= 'dense'>
          <Link to="/">
            <img src={logo} alt= "logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            CIFTLIK BANK
          </Typography>
          <Button color="inherit" href = ''>ABOUT</Button>
          <Button color="inherit" href = ''>PRODUCT</Button>
          <Button color="inherit" href = ''>PACKAGE</Button>
          <Button color="inherit" href = ''>CONTACT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
