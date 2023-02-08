import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './speciesName';
import PlanetName from './planetName';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState("humans");
  	const [planetName, setPlanetName] = useState("Planet Earth");
  	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName id = "speciesNameId" type="speciesNameType" speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName id = "planetNameId" type="planetNameType" planetName={planetName} onChangePlanetName={(e : any) => setPlanetName(e.target.value)} />
			<SpeciesName id = "speciesNameId" type="SpeciesNameType" speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
