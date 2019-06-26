import React, { Component } from 'react';
import { AuthConsumer } from '../../services/AuthContext';


export default () => (
    <AuthConsumer>
        {(value) => (
            <h1 onClick={() => value.onClick()}>My Todos {value.userId}</h1>
        )}
    </AuthConsumer>
);