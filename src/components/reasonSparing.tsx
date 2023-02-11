import React from 'react';

export interface SpeciesNameProps{
	id: string;
	type: string;
	reasonSparing: string;
	onChangeReasonSparing: (speciesName: string) => void;
}

const ReasonSparing : React.FC<SpeciesNameProps> = ( {
	id, type, reasonSparing, onChangeReasonSparing}) => {

	return (
		<>
        <label htmlFor={reasonSparing}>Reason for sparing::</label>
		<textarea id={id} defaultValue={reasonSparing} onChange={(e) => {
			onChangeReasonSparing(e.target.value);
		  }} />
		  </>
    )
}

export default ReasonSparing;