import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Login } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
    </Switch>
);


export default Router;