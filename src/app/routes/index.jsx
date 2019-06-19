import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AllComponentes from '../../components/AllComponentes';
import { JoaoCtx } from '../context/Joao';
import { JoseCtx } from '../context/jose';
import { MariaCtx } from '../context/Maria';
import WrapedContext from '../context/WrapedContext';


export const Routes = () => (
    <Router>
        <Switch>
            <WrapedContext contexts={[JoseCtx, JoaoCtx, MariaCtx]}>
                <Route exact path="/contexts" component={AllComponentes} />
                <Redirect from="/" to="/contexts" />
            </WrapedContext>
        </Switch>
    </Router>
)