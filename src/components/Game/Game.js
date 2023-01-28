import React from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const handleGuesses = (guess) => {
		if (guesses.includes(guess)) {
			window.alert(`Sorry, you've already guess this word! 😘`);
			return;
		}
		const newResult = [...guesses, guess];
		setGuesses(newResult);
	};
	return (
		<>
			<GuessResult guesses={guesses} />
			<GuessInput handleGuessResult={handleGuesses} />
		</>
	);
}

export default Game;
