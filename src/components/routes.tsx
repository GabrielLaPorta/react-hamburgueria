import React from 'react'
import { Router, Switch, Route } from 'react-router'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import { history } from '../history'
import NotFount from './not-found'
import PrivateRoute from './private-route'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login" />
            <Route component={Register} exact path="/register" />
            <PrivateRoute component={Home} exact path="/" />
            <PrivateRoute component={NotFount} />
        </Switch>
    </Router>
)
export default Routes