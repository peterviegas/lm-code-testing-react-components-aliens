import React from 'react';

export interface SpeciesNameProps{
	id: string;
	type: string;
	speciesName: string;
	onChangeSpeciesName: (speciesName: string) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ( {
	id, type, speciesName, onChangeSpeciesName}) => {

	return (
		<>
        <label htmlFor={speciesName}>Species Name:</label>
		<input id={id} type={type} defaultValue={speciesName} onChange={(e) => {
			onChangeSpeciesName(e.target.value);
		  }} />
		  </>
    )
}

export default SpeciesName;