import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default class Input extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        inputType: PropTypes.oneOf(['text', 'number']).isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        handleChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
    };
    
    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <input
                className="form-input"
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.value}
                onChange={this.props.handleChange}
                placeholder={this.props.placeholder} />
            </div>
        )
    }
}
