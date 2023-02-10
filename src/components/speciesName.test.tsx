import {render, fireEvent, screen} from '@testing-library/react'
import SpeciesName,  {SpeciesNameProps} from './speciesName';

test('renders a SpeciesName', async () => {
	const onChangeSpeciesNameImplementation = jest.fn(() => "test");
	const mockSpeciesName: SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: 'humans',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
	}
	render(<SpeciesName {...mockSpeciesName} />);
	//const divElement = screen.getByText("humans");
	expect(screen.getByText('Species Name:')).toBeInTheDocument();
	expect(screen.getByDisplayValue(mockSpeciesName.speciesName)).toBeInTheDocument();


  });