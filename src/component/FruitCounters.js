import React, {Component} from 'react';
import FruitCounter from './FruitCounter';
import Button from './Button';
import '../App.css';

class FruitCounters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bananas: 4,
            strawberries: 0,
            apples: 0,
            kiwis: 2
        };
    }

    increaseCount = (fruit) => {
        this.setState((prevState) => ({
            [fruit]: prevState[fruit] + 1
        }));
    };

    decreaseCount = (fruit) => {
        this.setState((prevState) => ({
            [fruit]: Math.max(prevState[fruit] - 1, 0)
        }));
    };

    resetCounts = () => {
        this.setState({
            bananas: 0,
            strawberries: 0,
            apples: 0,
            kiwis: 0
        });
    };

    render() {
        const {bananas, strawberries, apples, kiwis} = this.state;

        return (
            <div className="container">
                <FruitCounter
                    fruit="Bananen"
                    count={bananas}
                    increaseCount={() => this.increaseCount('bananas')}
                    decreaseCount={() => this.decreaseCount('bananas')}
                />
                <FruitCounter
                    fruit="Aardbeien"
                    count={strawberries}
                    increaseCount={() => this.increaseCount('strawberries')}
                    decreaseCount={() => this.decreaseCount('strawberries')}
                />
                <FruitCounter
                    fruit="Appels"
                    count={apples}
                    increaseCount={() => this.increaseCount('apples')}
                    decreaseCount={() => this.decreaseCount('apples')}
                />
                <FruitCounter
                    fruit="Kiwi's"
                    count={kiwis}
                    increaseCount={() => this.increaseCount('kiwis')}
                    decreaseCount={() => this.decreaseCount('kiwis')}
                />
                <Button onClick={this.resetCounts}>Reset</Button>
            </div>
        );
    }
}

export default FruitCounters;
