import React from 'react'
import './character.css';

const Character = (props) => {

	return (
		<li className="character-item">
			<p><strong>Name:</strong> {props.character.name}</p>
			<p><strong>Created:</strong> {props.character.created}</p>
			<p><strong>Gender:</strong> {props.character.gender}</p>
			<p><strong>Height:</strong> {props.character.height}</p>
		</li>
	)
}




export default Character;