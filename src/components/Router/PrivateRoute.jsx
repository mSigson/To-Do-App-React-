import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor() {
        super();

        this.state = {
            isAuth: !!localStorage.getItem('userAuth'),
        };
    };

    componentDidMount = () => {
        const parsedData = JSON.parse(localStorage.getItem('userAuth'));
        const isAuth = parsedData.data.token === "testToken";
        this.setState({ isAuth });
    };  

    render() {
        const { isAuth } = this.state;
        const { path, component: Component } = this.props;
        return (
            isAuth ? <Route path={path} component={Component}/> : <Redirect to='/login'/>
        );
    };
};

export default PrivateRoute;