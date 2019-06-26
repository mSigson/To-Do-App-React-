import React, { Component, createContext } from 'react';

const AuthContext = createContext();

export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
    constructor() {
        super();
        this.state = {
            userId: 'this is a user id',
            onClick: this.onClick,
        };
    }

    onClick = () => {
        alert('hello');
    }

    render() {
        const { children } = this.props;
        return (
            <AuthContext.Provider value={this.state}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;

