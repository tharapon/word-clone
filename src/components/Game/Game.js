import React from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Result from '../Result';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [result, setResult] = React.useState({ active: true });
	const handleGuesses = (guess) => {
		if (guesses.includes(guess)) {
			window.alert(`Sorry, you've already guess this word! 😘`);
			return;
		}
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);
	};

	React.useEffect(() => {
		if (guesses.includes(answer)) {
			console.log('yes');
			setResult({ active: false, win: true, round: guesses.length });
		}
		if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
			setResult({ active: false, win: false, answer });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guesses?.length]);

	return (
		<>
			<div className='game-wrapper'>
				<GuessResult guesses={guesses} answer={answer} />

				<GuessInput
					handleGuesses={handleGuesses}
					disabled={!result.active}
				/>
			</div>

			{!result.active && <Result result={result} />}
		</>
	);
}

export default Game;
