import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <button
					className="button"
					onClick={this.props.handleClick}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}
