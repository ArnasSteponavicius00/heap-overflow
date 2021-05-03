import React, { useState, useEffect } from 'react'
import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core';
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
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" align="left">
                {/* <img className={classes.image} src={logo} alt="logo" height="100" /> */}
                <Typography className={classes.header} variant="h5" align="center">HEAP-OVERFLOW</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    <Typography className={classes.forum} variant="h3" align="center">Forum Posts</Typography>
                    <Grid container direction="row" justify="space-between" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={12}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
