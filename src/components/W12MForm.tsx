import { useState } from 'react';
import W12MHeader from './W12MHeader';

const W12MForm = () => {

	const [speciesName, setspeciesName] = useState("");
  	const [planetName, setplanetName] = useState("");
  	const [numberOfBeings, setnumberOfBeings] = useState<number>(0);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
