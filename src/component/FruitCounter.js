import React, { Component } from 'react';
import Button from './Button';
import '../App.css';

class FruitCounter extends Component {
    render() {
        const { fruit, count, increaseCount, decreaseCount } = this.props;

        return (
            <div className="fruit-counter">
                <span className="fruit-name">{fruit}:{' '}</span>
                <Button onClick={decreaseCount}>-</Button>
                {count}
                <Button onClick={increaseCount}>+</Button>
            </div>
        );
    }
}

export default FruitCounter;
