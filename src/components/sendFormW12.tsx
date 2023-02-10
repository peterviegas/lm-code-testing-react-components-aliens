import React from 'react';

export interface SpeciesNameProps{
	title: string;
	sendFormW12: boolean;
}

const SpeciesName : React.FC<SpeciesNameProps> = ( {
	title, sendFormW12, ...props}) => {

	return (
		<>
        <button {...props}>{title}</button>
		{sendFormW12}
        </>
    )
}

export default SpeciesName;