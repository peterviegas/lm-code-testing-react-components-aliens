import React, { useState } from 'react';
import ErrorMessage from './errorMessage';

export interface SelectTagTwoPlusTwoProps{
	id: string;
	selectTagTwoPlusTwo: string;
	onChangeSelectTagTwoPlusTwo: (selectTagTwoPlusTwo: string) => void;
}

const SelectTagTwoPlusTwo : React.FC<SelectTagTwoPlusTwoProps> = ( {
	id, selectTagTwoPlusTwo, onChangeSelectTagTwoPlusTwo}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate: (value: string) => string | undefined = (value) => {
		if (value !== '4') {
			return "Error - In what is 2 + 2: 4 must be selected."
		}
		return undefined;
	}

	return (
		<>
        <label htmlFor={selectTagTwoPlusTwo}>What is 2 + 2?</label>
		<select 
			id={id}
			value={selectTagTwoPlusTwo} onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeSelectTagTwoPlusTwo(e.target.value);
			  }}>
			<option value="4">4</option>
          	<option value="Not 4">Not 4</option>
		</select>
		  {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
		</>
    )
}

export default SelectTagTwoPlusTwo;