import React, { useEffect } from 'react'
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import logo from './images/logo.svg';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    // use a hook to get the action creator to request post data
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                <img className={classes.image} src={logo} alt="logo" height="100" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Form />  
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
