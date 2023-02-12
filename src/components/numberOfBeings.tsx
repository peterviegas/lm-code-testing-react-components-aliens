import React, { useState } from 'react';
import ErrorMessage from './errorMessage';

export interface NumberOfBeingsProps{
	id: string;
	type: string;
	numberOfBeings: number;
	onChangeNumberOfBeings: (numberOfBeings: number) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ( {
	id, type, numberOfBeings, onChangeNumberOfBeings}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate: (value: string) => string | undefined = (value) => {
		if (parseInt(value)< 1000000000) {
			return "Number of beings: Must be at least 1,000,000,000."
		}
		if (/[^0-9]/.test(value)) {
			return "Number of beings: Numbers ONLY."
		}
		return undefined;
	}

	return (
		<>
        <label htmlFor="numberOfBeings">Number of beings:</label>
		<input id={id} type={type} defaultValue={numberOfBeings} onChange={(e) => {
			const errorMessage = validate(e.target.value);
			setErrorMessage(errorMessage);
			onChangeNumberOfBeings(e.target.valueAsNumber);
		  }} />
		  {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
		  </>
    )
}

export default NumberOfBeings;