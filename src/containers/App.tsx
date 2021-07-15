import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import PrivateRoute from '../components/private-route'
import NotFount from '../components/not-found'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Ingredients from '../pages/ingredients/ingredient'
import CustomerBurgers from '../pages/customer-burgers/customerBurger'

import { history } from '../history'

const App = () => {
    return (
        <main className="App">
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <PrivateRoute exact path="/" component={Home}/>
                    <PrivateRoute exact path="/ingredients" component={Ingredients}/>
                    <PrivateRoute exact path="/burgers" component={CustomerBurgers}/>
                    <PrivateRoute component={NotFount}/>
                </Switch>
            </BrowserRouter>
        </main>
    )
}

export default App;
