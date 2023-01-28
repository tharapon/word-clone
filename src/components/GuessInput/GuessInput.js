import React from 'react';

function GuessInput({ handleGuesses, disabled }) {
	const [guess, setGuess] = React.useState('');
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current.focus();
	}, []);
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
				ref={ref}
				id='guess-input'
				type='text'
				value={guess}
				onChange={handleChange}
				minLength={5}
				maxLength={5}
				disabled={disabled}
			/>
		</form>
	);
}

export default GuessInput;
