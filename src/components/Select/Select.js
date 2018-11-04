import React, { Component } from 'react';
import './Select.css';

export default class Select extends Component {
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
