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
				<p><b>Species Name:</b> {speciesName}</p>
				<p><b>Planet Name:</b> {planetName}</p>
				<p><b>Number of beings:</b> {numberOfBeings}</p>
				<p><b>What is 2+2?</b> {selectTagTwoPlusTwo}</p>
				<p><b>Reason for sparing:</b> {reasonSparing}</p>
	
			</div>
			</>
		)
	}else {
		return null;
	}
}

export default DisplayData;