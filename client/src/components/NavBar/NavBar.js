import React, { useState } from 'react';
import { Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';

import Form from '../Form/Form';
import useStyles from './styles';

const NavBar = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();

    return(
        <BrowserRouter>
            <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                <div  className={classes.navBarDiv}>
                    <Typography className={classes.header} variant="h5">HEAP-OVERFLOW</Typography>
                    <Link to='/question'><Button className={classes.qButton}>POST</Button></Link>
                </div>
            </AppBar>
            <Switch>
                <Route path="/question"><Form currentId={currentId} setCurrentId={setCurrentId}/></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default NavBar;