import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';

const Home = ( {setCurrentId } ) => {
    return (
        <BrowserRouter>
            <Grow in>
                <Container>
                    <Switch>
                        <Grid container spacing={2}>       
                            <Grid item xs={12} sm={12}>
                                <Route path="/"><Posts setCurrentId={setCurrentId} /></Route> 
                            </Grid>
                        </Grid>
                    </Switch>
                </Container>
            </Grow>
        </BrowserRouter>
    )
}

export default Home;
