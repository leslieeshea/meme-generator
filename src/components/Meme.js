import React from 'react';
import memesData from '../memesData';

const data = memesData.data.memes;
const meme =data[Math.floor(Math.random() * data.length)];
console.log(meme.url);

export default function Meme() {
	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const randomNumber = data[Math.floor(Math.random() * data.length)];
		const url = memesArray[randomNumber].url;

		console.log(url);
	}

	return (
		<main>
			<div className='form'>
				<input
					type='text'
					className='form--input'
					placeholder='Top text'
				/>
				<input
					type='text'
					className='form--input'
					placeholder='Bottom text'
				/>
				<button
					className='form--button'
					onClick={getMemeImage}
				>
					Get a new meme image 🖼️
				</button>
			</div>
		</main>
	)
}
