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
                {/* Ternary to change what is seen */}
                <Typography variant="h5">{signedUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { signedUp && (
                            <React.Fragment>
                                <Grid xs={12} md={6}>
                                <TextField name="fName" label="First Name" onChange={handleChange} required autoFocus xs={6} fullWidth/>
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <TextField name="lName" label="Last Name" onChange={handleChange} required autoFocus xs={6} fullWidth/>
                                </Grid>
                            </React.Fragment>
                        )}

                        <Grid xs={12} md={12}>
                            <TextField name="email" label="Email Address" onChange={handleChange} type="email" required autoFocus fullWidth/>
                        </Grid>

                        <Grid xs={12} md={12}>
                            <TextField name="password" label="Password" onChange={handleChange} type="password" required autoFocus fullWidth/>
                        </Grid>
                        { signedUp && 
                            <Grid xs={12} md={12}>
                                <TextField name="confirmPassword" label="Confirm Password" onChange={handleChange} type="password" required autoFocus fullWidth/>
                            </Grid>
                        }
                        
                    </Grid>
                    <Button className={classes.qButton} type="submit" variant="contained" alignItems="center" color="secondary">
                            { signedUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;