import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Modelos from './pages/Modelos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/:marca/:id/" component={Modelos} />
            </Switch>
        </BrowserRouter>
    );
};