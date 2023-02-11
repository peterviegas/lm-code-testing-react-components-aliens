import React from 'react';

export interface NumberOfBeingsProps{
	id: string;
	type: string;
	numberOfBeings: number;
	onChangeNumberOfBeings: (numberOfBeings: number) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ( {
	id, type, numberOfBeings, onChangeNumberOfBeings}) => {

	return (
		<>
        <label htmlFor="numberOfBeings">Number of beings:</label>
		<input id={id} type={type} defaultValue={numberOfBeings} onChange={(e) => {
			onChangeNumberOfBeings(e.target.valueAsNumber);
		  }} />
		  </>
    )
}

export default NumberOfBeings;