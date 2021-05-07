import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import { deleteUser } from '../../../actions/auth';
import { useHistory } from 'react-router-dom';

import useStyles from './styles'; // https://material-ui.com/styles/api/#makestyles-styles-options-hook

const UserForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    // If there is no user logged in return an empty div
    if(!user?.result?.name) {
        return (
            <div>
                <Typography variant="h6">Please Sign in to view your details.</Typography>
            </div>
        );
    }
    
    const onDeleteUser = (e) => { 
        e.preventDefault();
        dispatch(deleteUser(user.result._id));
        history.push('/');
    };

    return (
        <Grid className={classes.grid} xs={12} md={6}>
            <Paper className={classes.paper}>
                <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
                    <Typography variant="h6">Details</Typography>
                    <Grid container xs={12} md={12}>
                        <Grid container xs={12} md={6}>
                            <div className={classes.divInfo}>
                                <Typography variant="body2" >Name: {user.result.name}</Typography>
                                <Typography variant="body2" >Email: {user.result.email}</Typography>
                                <br/>
                                <Typography variant="body2" >ID: {user.result._id}</Typography>
                            </div>
                        </Grid>
                        <Grid container direction="column" alignItems="flex-end" xs={12} md={6}>
                                <Button variant="body2">Edit Name</Button>
                                <Button variant="body2">Edit Email</Button>
                                <Button variant="body2" onClick={onDeleteUser}>Delete Account</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
}

export default UserForm;