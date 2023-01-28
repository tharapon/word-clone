import React from 'react';

function Result({ result }) {
	if (result.win) {
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong> {result.round} guesses</strong>.
				</p>
			</div>
		);
	}

	return (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{result.answer}</strong>.
			</p>
		</div>
	);
}

export default Result;
