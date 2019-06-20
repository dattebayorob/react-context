import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MariaForm from './MariaForm';
import MariaList from './MariaList';

export const Maria = props => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}/`} component={MariaList}/>
            <Route path={`${props.match.path}/form`} component={MariaForm}/>
        </Switch>
    )

}