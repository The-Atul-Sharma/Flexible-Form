import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export default class Select extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        handleInputChange: PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        options: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <select
                    className="form-select"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleInputChange}>
                    <option value="">{this.props.placeholder}</option>
                    {this.props.options.map(opt => {
                        return (
                            <option
                                key={opt}
                                value={opt}
                            >
                                {opt}
                            </option>
                        );
                    })}
                </select>
	        </div>
        )
    }
}
