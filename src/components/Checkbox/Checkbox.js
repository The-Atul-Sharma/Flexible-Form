import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export default class Checkbox extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ]),
        handleChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <div className="checkbox-group">
                    {this.props.options.map((option, index) => {
                        return (
                            <label key={option} className="form-label capitalize">
                                <input
                                    key={index}
                                    className="form-checkbox"
                                    type={this.props.inputType} 
                                    name={this.props.name}
                                    onChange={this.props.handleChange}
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
