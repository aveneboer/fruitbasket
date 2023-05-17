import React, { Component } from 'react';
import Button from './Button';
import '../App.css';

class FruitCounter extends Component {
    render() {
        const { fruit, count, increaseCount, decreaseCount } = this.props;

        const getCounterClassName = () => {
            // Conditionele klasse toewijzing aan de fruit-counter
            if (count > 0) {
                return 'fruit-counter selected';
            } else {
                return 'fruit-counter';
            }
        };

        return (
            <div className={getCounterClassName()}>
                <span className="fruit-name">{fruit}:{' '}</span>
                <Button onClick={decreaseCount}>-</Button>
                {count}
                <Button onClick={increaseCount}>+</Button>
            </div>
        );
    }
}

export default FruitCounter;
