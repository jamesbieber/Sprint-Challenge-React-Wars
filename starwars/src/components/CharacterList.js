import React from 'react'

import Character from './Character'


const CharacterList = (props) => {
	return (

		<div>
			<ul className="character-list">
				{console.log(props.starwarsChars)}
				{props.starwarsChars.map((character, index) => {
					return <Character key={index} character={character} />
				})}
			</ul>
		</div>
	)
}




export default CharacterList;