import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import ScrollToTop from './components/helpers/ScrollToTop';

import Home from './components/containers/Home';
import StrikeList from './components/containers/StrikeList';
import DroneStrike from './components/containers/DroneStrike';
import ChartData from './components/containers/ChartData';
import NotFound from './components/containers/NotFound';

export default (
    <Router>
        <ScrollToTop>
            <Navigation>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/data" component={ChartData}/>
                    <Route exact path="/strike/list" component={StrikeList}/>
                    <Route exact path="/strike/:id" component={DroneStrike}/>
                    <Route path="/error" component={NotFound} />
                    <Redirect from="*" to="/error" />
                </Switch>
            </Navigation>
        </ScrollToTop>
    </Router>
);