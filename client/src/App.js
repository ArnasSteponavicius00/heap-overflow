import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container} from '@material-ui/core';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Authentication/Auth';
import UserForm from './components/Form/UserForm/UserForm';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/userdetails" component={UserForm} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
