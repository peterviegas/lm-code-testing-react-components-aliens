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
				<p><b>{speciesName}</b></p>
				<p>{planetName}</p>
				<p>{numberOfBeings}</p>
				<p>{selectTagTwoPlusTwo}</p>
				<p>{reasonSparing}</p>
	
			</div>
			</>
		)
	}else {
		return null;
	}
}

export default DisplayData;