import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Authentication/Auth';

function App() {
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
                <Switch>
                    <Route exact path="/"><Home setCurrentId={setCurrentId} /></Route>
                    <Route exact path="/auth" component={Auth} />
                </Switch>
            </Container>

        </BrowserRouter>
    );
}

export default App;
