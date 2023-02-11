import {render, screen} from '@testing-library/react'
import PlanetName,  {PlanetNameProps} from './planetName';
import  user  from '@testing-library/user-event';

test('renders a SpeciesName', async () => {
	const onChangePlanetNameImplementation = jest.fn(() => "test");
	const mockPlanetName: PlanetNameProps = {
		id: 'id',
		type: 'type',
		planetName: 'Planet Earth',
		onChangePlanetName:onChangePlanetNameImplementation
	}
	render(<PlanetName {...mockPlanetName} />);
	//const divElement = screen.getByText("humans");
	expect(screen.getByText('Planet Name:')).toBeInTheDocument();
	expect(screen.getByDisplayValue(mockPlanetName.planetName)).toBeInTheDocument();
  });

  test('correctly calls handle change', async () => {
	const onChangePlanetNameImplementation = jest.fn(() => "test");
	const mockPlanetName: PlanetNameProps = {
		id: 'id',
		type: 'type',
		planetName: 'Planet Earth',
		onChangePlanetName:onChangePlanetNameImplementation
	}
	  render(<PlanetName {...mockPlanetName} />);
	  //await user.type(screen.getByLabelText(labelText),"123");
	  const input = screen.getByRole('textbox');
	  await user.type(input, 'elephant');
	  expect(mockPlanetName.onChangePlanetName).toHaveBeenCalledTimes(8);
  });