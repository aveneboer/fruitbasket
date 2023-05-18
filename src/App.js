import React, {Component} from 'react';
import FruitCounters from './component/FruitCounters';
import './App.css';
import Form from "./component/Form";
import logo from './assets/screenshot-logo.png';


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
            <header>
                <img src={logo} alt="Logo"/>
            </header>
            <main>
                <FruitCounters/>
                <Form onSubmit={this.handleFormSubmit}/>
            </main>
            </body>
        );
    }
}

export default App;
