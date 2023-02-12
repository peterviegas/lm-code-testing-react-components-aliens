import {render, fireEvent, screen} from '@testing-library/react'
import PlanetName,  {PlanetNameProps} from './planetName';
import  user  from '@testing-library/user-event';

test(`renders a PlanetName
	Checks if there is the phrase Planet Name: in the label line`, async () => {
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

  test(`renders a PlanetName,
	correctly calls handle change,
	change the value of the textbox and check if the change took place`, async () => {
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

  //For the second part of the tests, I kept Neil's example using it instead of test, 
  //but I kept test in my phase one to remember the two cases
  it(`Given the required props,
		When the component PlanetName is rendered,
		Then the appointment description should be present`, () => {
		const onChangePlanetNameImplementation = jest.fn();
		const mockPlanetName : PlanetNameProps = {
		id: 'id',
		type: 'type',
		planetName: 'Planet Earth',
		onChangePlanetName:onChangePlanetNameImplementation
		};

    	render(<PlanetName {...mockPlanetName} />);

    	expect(
    		screen.getByText('Planet Name:')
    	).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component PlanetName is rendered,
		change the value of the textbox to less than three characters and check the error message in the component`, () => {
			const onChangePlanetNameImplementation = jest.fn();
			const mockPlanetName : PlanetNameProps = {
			id: 'id',
			type: 'type',
			planetName: 'Planet Earth',
			onChangePlanetName:onChangePlanetNameImplementation
			};
	
		render(<PlanetName {...mockPlanetName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'p' } });

		const message = 'Planet Name: Must be between 2 and 49 characters.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component PlanetName is rendered,
		change the textbox value to greater than 23 characters and check the error message in the component`, () => {
		const onChangePlanetNameImplementation = jest.fn();
		const mockPlanetName : PlanetNameProps = {
		id: 'id',
		type: 'type',
		planetName: 'Planet Earth',
		onChangePlanetName:onChangePlanetNameImplementation
		};
	
		render(<PlanetName {...mockPlanetName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio' } });

		const message = 'Planet Name: Must be between 2 and 49 characters.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component PlanetName is rendered,
		change the textbox value character special
		check the error message in the component`, () => {
		const onChangePlanetNameImplementation = jest.fn();
		const mockPlanetName : PlanetNameProps = {
		id: 'id',
		type: 'type',
		planetName: 'Planet Earth',
		onChangePlanetName:onChangePlanetNameImplementation
		};

		render(<PlanetName {...mockPlanetName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'action = ação.' } });

		const message = 'Planet Name: Numbers are allowed, but no special characters.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });
