import { useState } from 'react';
import W12MHeader from './W12MHeader';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState("humans");
  	const [planetName, setPlanetName] = useState("");
  	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
