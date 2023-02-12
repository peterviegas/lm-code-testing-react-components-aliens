import React, { useEffect } from 'react';

export interface DisplayDataProps{
	speciesName: string;
    planetName: string;
    numberOfBeings: number;
    selectTagTwoPlusTwo: string;
    reasonSparing: string;
    sendFormW12: boolean;
}

const DisplayData : React.FC<DisplayDataProps> = ( {
	speciesName, planetName, numberOfBeings, selectTagTwoPlusTwo, reasonSparing, sendFormW12}) => {

	useEffect(() => { }, [sendFormW12]);

	if(sendFormW12){
		return (
			<>
			<div>
				<h1>Display Data</h1>
				<p>Species Name: {speciesName}</p>
				<p>Planet Name: {planetName}</p>
				<p>Number of beings: {numberOfBeings}</p>
				<p>What is 2+2? {selectTagTwoPlusTwo}</p>
				<p>Reason for sparing: {reasonSparing}</p>
			</div>
			</>
		)
	}else {
		return null;
	}
}

export default DisplayData;