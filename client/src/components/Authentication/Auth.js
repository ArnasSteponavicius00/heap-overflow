import React from 'react';
import { Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';

import useStyles from './styles';

const Auth = () => {
    const state = null;
    const classes = useStyles();
    const signedUp = false;

    // placeholder function for now
    const handleChange = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <Container component='main' maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">{signedUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={6} md={6}>
                            <TextField name="fName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <TextField name="lName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;