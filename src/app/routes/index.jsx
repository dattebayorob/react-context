import React from 'react';
import { BrowserRouter as Router, Route, Switch as SwitchRouter } from 'react-router-dom';
import AllComponentes from '../../components/AllComponentes';
import { JoseComponent } from '../../components/JoseComponent';
import { Maria } from '../../views/Maria';
import { JoaoCtx } from '../context/Joao';
import { JoaquimCtx } from '../context/Joaquim';
import { JoseCtx } from '../context/jose';
import { MadalenaCtx } from '../context/Madalena';
import { MariaCtx } from '../context/Maria';
import { WrapedContext } from '../context/WrapedContext';

const contexts = [
    JoseCtx,
    JoaoCtx,
    MariaCtx,
    MadalenaCtx,
    JoaquimCtx 
]

export const Routes = () => (
    <Router>
        <Switch contexts={contexts}>
            <Route path="/contexts" component={AllComponentes} />
            <Route path="/maria" component={Maria} />
            <Route path="/jose" component={JoseComponent} />
        </Switch>
    </Router>
)

const Switch = ({ contexts, children }) => (
    <WrapedContext {...{ contexts }}>
        <SwitchRouter>{children}</SwitchRouter>
    </WrapedContext>)