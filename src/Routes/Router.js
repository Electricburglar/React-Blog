import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={} />
        <Route path="/about" component={About} />
    </Switch>
);


export default Router;