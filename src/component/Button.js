import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
    render() {
        const { onClick, children } = this.props;

        return <button className="button" onClick={onClick}>{children}</button>;
    }
}

export default Button;
