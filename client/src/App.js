import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import { Container, Grow, Grid, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Authentication/Auth';
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
            <NavBar currentId={currentId} setCurrentId={setCurrentId} />
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                        <Switch>
                            <Grid container direction="row" justify="space-between" alignItems="center" spacing={4}>       
                                <Grid item xs={12} sm={12}>
                                    <Route path="/"><Posts setCurrentId={setCurrentId} /></Route> 
                                </Grid>
                            </Grid>
                        </Switch>
                        <Auth />
                    </Container>
                </Grow>
            </Container>
        </BrowserRouter>
    );
}

export default App;
