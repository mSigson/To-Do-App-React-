import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    };

    constructor() {
        super();
        this.state = {};
    };
    render() {
        const { 
            type,
            placeholder,
            onChange,
        } = this.props;

        return (
            <input 
                type={type} 
                placeholder={placeholder} 
                onChange={onChange}
            />
        );
    };
};

export default TextInput;