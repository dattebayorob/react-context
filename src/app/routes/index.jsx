import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllComponentes from '../../components/AllComponentes';
import { JoseComponent } from '../../components/JoseComponent';
import { Maria } from '../../views/Maria';
import { JoaoCtx } from '../context/Joao';
import { JoaquimCtx } from '../context/Joaquim';
import { JoseCtx } from '../context/jose';
import { MadalenaCtx } from '../context/Madalena';
import { MariaCtx } from '../context/Maria';
import { WrapedContext } from '../context/WrapedContext';

const ContextRoute = ({contexts, ...props}) => <WrapedContext {...{contexts}}>
                                                    <Route {...props} />
                                                </WrapedContext>

export const Routes = () => (
    <Router>
        <Switch>
            <ContextRoute exact path="/jose" component={JoseComponent} contexts={[ JoseCtx ]}/>
            <ContextRoute path="/contexts" component={AllComponentes} contexts={[ JoseCtx, JoaoCtx, MariaCtx, MadalenaCtx, JoaquimCtx ]} />
            <ContextRoute path="/maria" component={Maria} contexts={[ MariaCtx ]} />
        </Switch>
    </Router>
)