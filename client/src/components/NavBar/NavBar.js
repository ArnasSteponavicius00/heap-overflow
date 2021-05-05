import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Button, Toolbar, Container } from '@material-ui/core';
import { decode } from 'jsonwebtoken';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        dispatch({ type: "LOGOUT" });
        history.push('/');
        window.location.reload();
        setUser(null);
    };

    useEffect(() => {
        // check if the token exists in localStorage then store it in a var
        const token = user?.token;

        // ref: https://stackoverflow.com/questions/44982412/how-do-i-check-for-token-expiration-and-logout-user
        if(token){
            const decoded = decode(token);

            // check if token has expired
            if(decoded.exp * 1000 < new Date().getTime()){
                logOut();
                localStorage.clear();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return(
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                <div  className={classes.navBarDiv}>
                    <Typography component={Link} to="/" className={classes.header} variant="h5">HEAP-OVERFLOW</Typography>
                </div>
                <Toolbar>
                    {/* Ternary operation to display different objects in the toolbar based on whether user is logged in or not */}
                    { user ? (
                        <div>
                            <Button className={classes.qButton} onClick={logOut}>Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Button component={Link} to="/auth" className={classes.qButton}>Sign In</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar> 
        </Container>
    );
}

export default NavBar;