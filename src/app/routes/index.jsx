import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AllComponentes from '../../components/AllComponentes';
import { JoaoCtx } from '../context/Joao';
import { JoseCtx } from '../context/jose';
import { MariaCtx } from '../context/Maria';
import WrapedContext from '../context/WrapedContext';
import { MadalenaCtx } from '../context/Madalena';
import { JoaquimCtx } from '../context/Joaquim';
import JoseComponent from '../../components/JoseComponent';


export const Routes = () => (
    <Router>
        <Switch>
            <WrapedContext contexts={[JoseCtx, JoaoCtx, MariaCtx, MadalenaCtx, JoaquimCtx]}>
                <Route path="/jose" component={JoseComponent} />
                <Route exact path="/contexts" component={AllComponentes} />
            </WrapedContext>
        </Switch>
    </Router>
)