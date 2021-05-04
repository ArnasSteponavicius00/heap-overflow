import React, { useState } from 'react';
import { Route, BrowserRouter, Link} from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';

import Form from '../Form/Form';
import useStyles from './styles';

const NavBar = ( { currentId, setCurrentId } ) => {
    const classes = useStyles();

    const user = null;

    return(
        <BrowserRouter>
            <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                <div  className={classes.navBarDiv}>
                    <Typography component={Link} to="/" className={classes.header} variant="h5">HEAP-OVERFLOW</Typography>
                </div>
                <Toolbar>
                    {/* Ternary operation to display different objects in the toolbar based on whether user is logged in or not */}
                    { user ? (
                        <div>
                            <Link to='/question'><Button className={classes.qButton}>POST</Button></Link>
                            <Button color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Button component={Link} to="/auth" color="secondary">Log In</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Route path="/question"><Form currentId={currentId} setCurrentId={setCurrentId}/></Route> 
        </BrowserRouter>
    );
}

export default NavBar;