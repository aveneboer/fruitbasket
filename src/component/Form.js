import React, { useState } from 'react';
import '../App.css';

const Form = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [postcode, setPostcode] = useState('');
    const [deliveryFrequency, setDeliveryFrequency] = useState('weekly');
    const [deliveryTime, setDeliveryTime] = useState('daytime');
    const [comment, setComment] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Log de formulier-waardes in de console
        console.log('Voornaam:', firstName);
        console.log('Achternaam:', lastName);
        console.log('Leeftijd:', age);
        console.log('Postcode:', postcode);
        console.log('Bezorgfrequentie:', deliveryFrequency);
        console.log('Tijdvak:', deliveryTime);
        console.log('Opmerking:', comment);
        console.log('Akkoord met voorwaarden:', agreeTerms);

        // Roep de onSubmit-functie van de bovenliggende component aan en geef de formulier-waardes door
        onSubmit({
            firstName,
            lastName,
            age,
            postcode,
            deliveryFrequency,
            deliveryTime,
            comment,
            agreeTerms
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">Voornaam:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Achternaam:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Leeftijd:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="postcode">Postcode:</label>
                <input
                    type="text"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="deliveryFrequency">Bezorgfrequentie:</label>
                <select
                    id="deliveryFrequency"
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                    required
                >
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Tijdvak:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="timeSlot"
                            value="daytime"
                            checked={deliveryTime === 'daytime'}
                            onChange={() => setDeliveryTime('daytime')}
                        />
                        Overdag
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="timeSlot"
                            value="evening"
                            checked={deliveryTime === 'evening'}
                            onChange={() => setDeliveryTime('evening')}
                        />
                        's Avonds
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="comment">Opmerking:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    Akkoord met voorwaarden
                </label>
            </div>

            <div className="form-group">
                <button type="submit" disabled={!agreeTerms}>Verzenden</button>
            </div>
        </form>
    );
};

export default Form;
