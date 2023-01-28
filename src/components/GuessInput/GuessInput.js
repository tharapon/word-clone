import React from 'react';

function GuessInput({ handleGuesses }) {
	const [guess, setGuess] = React.useState('');

	const handleChange = (event) => {
		setGuess(event.target.value.toUpperCase());
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (guess.length !== 5) {
			window.alert('Please guess 5 characters 😉');
			return;
		}
		handleGuesses(guess);
		setGuess('');
	};

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				required
				id='guess-input'
				type='text'
				value={guess}
				onChange={handleChange}
				minLength={5}
				maxLength={5}
			/>
		</form>
	);
}

export default GuessInput;
