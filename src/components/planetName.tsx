import React, { useState } from 'react';
import ErrorMessage from './errorMessage';

export interface PlanetNameProps{
	id: string;
	type: string;
	planetName: string;
	onChangePlanetName: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ( {
	id, type, planetName, onChangePlanetName}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate: (value: string) => string | undefined = (value) => {
		if (value.length < 2 || value.length > 49) {
			return "Planet Name: Must be between 2 and 49 characters."
		}
		if (/[^a-z A-Z0-9]/.test(value)) {
			return "Planet Name: Numbers are allowed, but no special characters."
		}
		return undefined;
	}

	return (
		<>
        <label htmlFor={planetName}>Planet Name:</label>
		<input id={id} type={type} defaultValue={planetName} onChange={(e) => {
			const errorMessage = validate(e.target.value);
			setErrorMessage(errorMessage);
			onChangePlanetName(e);
		  }} 
		  />
		  <br />
		  {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
		  </>
    )
}

export default PlanetName;