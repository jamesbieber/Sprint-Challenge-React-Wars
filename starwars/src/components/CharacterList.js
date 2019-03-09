import React from 'react'
import './character.css'

import Character from './Character'


const CharacterList = (props) => {
	return (

		<div>
			<ul className="character-list">
				{props.starwarsChars.map((character, index) => {
					return <Character key={index} character={character} />
				})}
			</ul>
		</div>
	)
}




export default CharacterList;