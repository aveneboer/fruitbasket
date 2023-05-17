import React, { Component } from 'react';
import FruitCounters from './component/FruitCounters';
import './App.css';
import Form from "./component/Form";

class App extends Component {
    handleFormSubmit = (formData) => {
        // Log de formulier-waardes in de console
        console.log('Formulier waardes:', formData);

        // Log de fruit-waardes in de console (indien nodig)
        console.log('Fruit waardes:', {
            bananas: this.bananas,
            strawberries: this.strawberries,
            apples: this.apples,
            kiwis: this.kiwis
        });
    };
    render() {
        return (
            <body>
                <FruitCounters />
                <Form onSubmit={this.handleFormSubmit} />
            </body>
        );
    }
}

export default App;
