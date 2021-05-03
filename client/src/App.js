import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Container, AppBar, Grow, Grid, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(null);

    // use a hook to get the action creator to request post data
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                    <Typography className={classes.header} variant="h5">HEAP-OVERFLOW</Typography>
                    <Link to='/question'><Button className={classes.qButton}>POST</Button></Link>
                </AppBar>
                <Grow in>
                    <Container>
                        <Switch>
                            <Route path="/question"><Form currentId={currentId} setCurrentId={setCurrentId}/></Route>
                            <Grid container direction="row" justify="space-between" alignItems="center" spacing={4}>
                            <Grid item xs={12} sm={12}>
                                <Route path="/"><Posts setCurrentId={setCurrentId} /></Route> 
                            </Grid>
                        </Grid>
                        </Switch>
                    </Container>
                </Grow>
            </Container>
        </BrowserRouter>
    );
}

export default App;
