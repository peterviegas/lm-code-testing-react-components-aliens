import React, { useState } from 'react';
import ErrorMessage from './errorMessage';

export interface SpeciesNameProps{
	id: string;
	type: string;
	speciesName: string;
	onChangeSpeciesName: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ( {
	id, type, speciesName, onChangeSpeciesName}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 3 || value.length > 23) {
            return "Species Name: Must be between 3 and 23 characters."
        }
        if (/[^a-z A-Z]/.test(value)) {
            return "Species Name: No numbers or special characters allowed!"
        }
        return undefined;
    }

	return (
		<>
        <label htmlFor={speciesName}>Species Name:</label>
		<input id={id} type={type} defaultValue={speciesName} 
			onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeSpeciesName(e);
		  }} />
		  <br />
		  {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
		  </>
    )
}

export default SpeciesName;