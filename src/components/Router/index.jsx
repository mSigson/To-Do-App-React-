import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'views/Login';
import MyToDos from 'views/MyToDos';
import PrivateRoute from './PrivateRoute';

const Router = () => ( 
    <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/mytodos' component={MyToDos}/>
    </Switch>
 );

export default Router;