import React from 'react';

export interface SendFormW12Props{
	title: string;
	sendFormW12: boolean;
}

const SendFormW12 : React.FC<SendFormW12Props> = ( {
	title, sendFormW12, ...props}) => {

	return (
		<>
        <button {...props}>{title}</button>
		{sendFormW12}
        </>
    )
}

export default SendFormW12;