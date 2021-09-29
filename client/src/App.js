import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//import { useDispatch } from 'react-redux';

import classIm from './images/class.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Bulletin dashboard</Typography>
          <img  className={classes.heading} src={classIm} alt="classIm" height="60"  />
        </AppBar>
        
      </Container>
    );

}

export default App;
