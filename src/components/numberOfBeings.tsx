import React from 'react';

interface NumberOfBeingsProps{
	id: string;
	type: string;
	numberOfBeings: number;
	onChangeNumberOfBeings: (speciesName: number) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ( {
	id, type, numberOfBeings, onChangeNumberOfBeings}) => {

	return (
		<>
        <label htmlFor="numberOfBeings">Planet Name: </label>
		<input id={id} type={type} value={numberOfBeings} onChange={(e) => {
			onChangeNumberOfBeings(e.target.valueAsNumber);
		  }} />
		  </>
    )
}

export default NumberOfBeings;