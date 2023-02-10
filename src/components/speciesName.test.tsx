import {render, fireEvent, screen} from '@testing-library/react'
import SpeciesName,  {SpeciesNameProps} from './speciesName';
import  user  from '@testing-library/user-event';

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

  test('correctly calls handle change', async () => {
	const onChangeSpeciesNameImplementation = jest.fn(() => "test");
	const mockSpeciesName: SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: 'humans',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
	}
	  render(<SpeciesName {...mockSpeciesName} />);
	  //await user.type(screen.getByLabelText(labelText),"123");
	  const input = screen.getByRole('textbox');
	  await user.type(input, 'elephant');
	  expect(mockSpeciesName.onChangeSpeciesName).toHaveBeenCalledTimes(8);
  });