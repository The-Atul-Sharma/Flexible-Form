import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

export default class Textarea extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        rows: PropTypes.number.isRequired,
        resize: PropTypes.bool,
        placeholder: PropTypes.string,
        handleInputChange: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <textarea
                    className="form-input"
                    style={this.props.resize ? null : {resize: 'none'}}
                    name={this.props.name}
                    rows={this.props.rows}
                    value={this.props.value}
                    onChange={this.props.handleInputChange}
                    placeholder={this.props.placeholder} />
            </div>
        )
    }
}
