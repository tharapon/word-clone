import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
	const result = guess && checkGuess(guess, answer);
	const cols = Array.from(Array(5).keys()).map(() => ({
		id: crypto.randomUUID(),
	}));

	return (
		<p className='guess'>
			{cols.map(({ id }, index) => {
				const char = result && result[index];
				return (
					<span
						className={`cell ${char ? char.status : ''}`}
						key={id}>
						{char?.letter}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
