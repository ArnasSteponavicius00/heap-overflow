import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import SinglePost from '../Posts/SinglePost/SinglePost';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <BrowserRouter>
            <Grow in>
                <Container>
                    <Switch>
                        <Grid container spacing={2}>       
                            <Grid item xs={12} sm={9}>
                                <Route path="/"><Posts setCurrentId={setCurrentId} /></Route>
                                <Route path="/singlepost"><SinglePost/></Route>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Route path="/"><Form currentId={currentId}  setCurrentId={setCurrentId} /></Route>
                            </Grid>
                        </Grid>
                    </Switch>
                </Container>
            </Grow>
        </BrowserRouter>
    )
}

export default Home;
