import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Auth from '../Authentication/Auth';

const Home = ( {setCurrentId } ) => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default Home;
