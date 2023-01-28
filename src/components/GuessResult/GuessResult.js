import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ guesses, answer }) {
	const rows = Array.from(Array(NUM_OF_GUESSES_ALLOWED).keys()).map(() => ({
		id: crypto.randomUUID(),
	}));

	return (
		<div className='guess-results'>
			{rows.map(({ id }, index) => (
				<Guess guess={guesses[index]} key={id} answer={answer} />
			))}
		</div>
	);
}

export default GuessResult;
