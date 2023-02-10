import React from 'react';

export interface SelectTagTwoPlusTwoProps{
	id: string;
	selectTagTwoPlusTwo: string;
	onChangeSelectTagTwoPlusTwo: (selectTagTwoPlusTwo: string) => void;
}

const SelectTagTwoPlusTwo : React.FC<SelectTagTwoPlusTwoProps> = ( {
	id, selectTagTwoPlusTwo, onChangeSelectTagTwoPlusTwo}) => {

	return (
		<>
        <label htmlFor={selectTagTwoPlusTwo}>What is 2 + 2?</label>
		<select 
			id={id}
			value={selectTagTwoPlusTwo} onChange={(e) => {
				onChangeSelectTagTwoPlusTwo(e.target.value);
			  }}>
			<option value="4">4</option>
          	<option value="Not 4">Not 4</option>
		</select>
		</>
    )
}

export default SelectTagTwoPlusTwo;