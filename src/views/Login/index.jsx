import React, { Component } from 'react';
import CardBoard from '../../components/Cardboard';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    };

    handleChange = (field, value) => {
        const newForm = { ...this.state };
        newForm[field] = value;
        this.setState({ ...newForm });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleAuthentication();
    };

    handleAuthentication = async () => {  
        const { email, password } = this.state;
        const { history } = this.props;

        const authResult = await axios.post(`${API_ENDPOINT}/users/authenticate`, { 
            email,
            password,
        });

        const formattedData = JSON.stringify(authResult);
        localStorage.setItem('userAuth', formattedData);

        history.push('/mytodos');
    };

    render() {
        return (
            <CardBoard>
                <h1>Login</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <TextInput 
                        type='text'
                        placeholder='enter email'
                        onChange={(event) => this.handleChange('email', event.target.value)}
                    />
                    <TextInput 
                        type='password'
                        placeholder='enter password'
                        onChange={(event) => this.handleChange('password', event.target.value)}
                    />
                    <Button type='submit'>Login</Button>
                </form>
            </CardBoard>
        );
    };
};

export default withRouter(Login);