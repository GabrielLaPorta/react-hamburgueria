import React from 'react'
import { Router, Switch, Route } from 'react-router'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import { history } from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login" />
            <Route component={Register} exact path="/register" />
            <Route component={Home} exact path="/" />
        </Switch>
    </Router>
)
export default Routes