import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export default class Checkbox extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        value: PropTypes.array,
        handleInputChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <div className="checkbox-group">
                    {this.props.options.map(option => {
                        return (
                            <label key={option} className="form-label capitalize">
                                <input
                                    className="form-checkbox"
                                    type={this.props.inputType} 
                                    name={this.props.name}
                                    onChange={this.props.handleInputChange}
                                    value={option}
                                    checked={this.props.value.indexOf(option) > -1}
                                /> 
                                {option}
                            </label>
                        );
                    })}
                </div>
            </div>
        )
    }
}
