import React from 'react';
import NUM_OF_GUESSES_ALLOWED from '../../constants';

function Guess({ guess }) {
	const chars = guess?.split('');
	const cols = Array.from(Array(5).keys()).map(() => ({
		id: crypto.randomUUID(),
	}));

	return (
		<p className='guess'>
			{cols.map(({ id }, index) => (
				<span className='cell' key={id}>
					{chars && chars[index]}
				</span>
			))}
		</p>
	);
}

export default Guess;
