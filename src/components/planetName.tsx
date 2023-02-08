import React from 'react';

interface PlanetNameProps{
	id: string;
	type: string;
	planetName: string;
	onChangePlanetName: (speciesName: string) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ( {
	id, type, planetName, onChangePlanetName}) => {

	return (
		<>
        <label htmlFor={planetName}>Planet Name: </label>
		<input id={id} type={type} value={planetName} onChange={(e) => {
			onChangePlanetName(e.target.value);
		  }} />
		  </>
    )
}

export default PlanetName;