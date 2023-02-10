import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './speciesName';
import PlanetName from './planetName';
import NumberOfBeings from './numberOfBeings'
import SelectTagTwoPlusTwo from './selectTagTwoPlusTwo'
import ReasonSparing from './reasonSparing'

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState("humans");
  	const [planetName, setPlanetName] = useState("Planet Earth");
  	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [selectTagTwoPlusTwo, setSelectTagTwoPlusTwo] = useState<string>('4');
	const [reasonSparing, setReasonSparing] = useState<string>('');
	const [sendFormW12, setSendFormW12] = useState<boolean>(false);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName id = "speciesNameId" type="speciesNameType" speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName id = "planetNameId" type="planetNameType" planetName={planetName} onChangePlanetName={(e : any) => setPlanetName(e.target.value)} />
			<NumberOfBeings id = "numberOfBeingsId" type="numberOfBeingsType" numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e : any) => setNumberOfBeings(e.target.value)} />
			<SelectTagTwoPlusTwo id = "selectTagTwoPlusTwoId" selectTagTwoPlusTwo={selectTagTwoPlusTwo} onChangeSelectTagTwoPlusTwo={(newValue: string) => setSelectTagTwoPlusTwo(newValue)} />
			<ReasonSparing id = "reasonSparing" type="reasonSparingType" reasonSparing={reasonSparing} onChangeReasonSparing={(e : any) => setReasonSparing(e.target.value)} />

			<button type="submit" onClick={()=>{setSendFormW12(true)}}>Send</button>
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
