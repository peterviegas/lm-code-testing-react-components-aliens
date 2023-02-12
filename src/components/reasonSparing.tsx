import React, { useState } from 'react';
import ErrorMessage from './errorMessage';

export interface ReasonSparingProps{
	id: string;
	type: string;
	reasonSparing: string;
	onChangeReasonSparing: (speciesName: string) => void;
}

const ReasonSparing : React.FC<ReasonSparingProps> = ( {
	id, type, reasonSparing, onChangeReasonSparing}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate: (value: string) => string | undefined = (value) => {
		if (value.length < 17 || value.length > 153) {
			return "Reason for sparing: Must be between 17 and 153 characters."
		}
		return undefined;
	}

	return (
		<>
        <label htmlFor={reasonSparing}>Reason for sparing:</label>
		<textarea id={id} defaultValue={reasonSparing} onChange={(e) => {
			const errorMessage = validate(e.target.value);
			setErrorMessage(errorMessage);
			onChangeReasonSparing(e.target.value);
		  }} />
		  {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
		  </>
    )
}

export default ReasonSparing;