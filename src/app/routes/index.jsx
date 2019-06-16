import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Dos from '../../components/Dos';
import { Tres } from '../../components/Tres';
import { Un } from '../../components/Un';


export const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/un" component={Un} />
            <Route exact path="/un/dos" component={Dos} />
            <Route exact path="/un/dos/tres" component={Tres} />
            <Redirect from="/" to="/un" />
        </Switch>
    </Router>
)