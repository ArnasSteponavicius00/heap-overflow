import React, { useState } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook


const UserForm = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    // If there is no user logged in return an empty div
    if(!user?.result?.name) {
        return (
            <div></div>
        );
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6" align="center">Details</Typography>
                <Grid container xs={12} md={12}>
                    <div className={classes.divInfo}>
                        <Typography variant="body2" >Name: {user.result.name}</Typography>
                        <Typography variant="body2" >Email: {user.result.email}</Typography>
                        <br/>
                        <Typography variant="body2" >ID: {user.result._id}</Typography>
                    </div>
                </Grid>
            </form>
        </Paper>
    );
}

export default UserForm;