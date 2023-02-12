import {render, fireEvent, screen} from '@testing-library/react'
import SpeciesName,  {SpeciesNameProps} from './speciesName';
import  user  from '@testing-library/user-event';

test(`renders a SpeciesName,
	Checks if there is the phrase Species Name in the label line`, async () => {
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

  test(`renders a SpeciesName,
	correctly calls handle change,
	change the value of the textbox and check if the change took place`, async () => {
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

  //For the second part of the tests, I kept Neil's example using it instead of test, 
  //but I kept test in my phase one to remember the two cases
  it(`Given the required props,
		When the component SpeciesName is rendered,
		Then the appointment description should be present`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mockSpeciesName : SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: 'humans',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
		};

    	render(<SpeciesName {...mockSpeciesName} />);

    	expect(
    		screen.getByText('Species Name:')
    	).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component SpeciesName is rendered,
		change the value of the textbox to less than three characters and check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mockSpeciesName : SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: 'humans',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
		};
		
    	render(<SpeciesName {...mockSpeciesName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'h' } });

		const message = 'Species Name: Must be between 3 and 23 characters.';
    	expect(
    		//screen.getByText('ERROR')
			screen.getByText(new RegExp(message, "i"))
    	//).not.toBeInTheDocument();
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component SpeciesName is rendered,
		change the textbox value to greater than 23 characters and check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mockSpeciesName : SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: '',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
		};
		
    	render(<SpeciesName {...mockSpeciesName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio' } });

		const message = 'Species Name: Must be between 3 and 23 characters.';
    	expect(
    		//screen.getByText('ERROR')
			screen.getByText(new RegExp(message, "i"))
    	//).not.toBeInTheDocument();
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component SpeciesName is rendered,
		change the textbox value character special
		check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mockSpeciesName : SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: '',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
		};
		
    	render(<SpeciesName {...mockSpeciesName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'action = ação.' } });

		const message = 'Species Name: No numbers or special characters allowed!';
    	expect(
    		//screen.getByText('ERROR')
			screen.getByText(new RegExp(message, "i"))
    	//).not.toBeInTheDocument();
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component SpeciesName is rendered,
		change the textbox value numbers
		check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mockSpeciesName : SpeciesNameProps = {
		id: 'id',
		type: 'type',
		speciesName: '',
		onChangeSpeciesName: onChangeSpeciesNameImplementation
		};
		
    	render(<SpeciesName {...mockSpeciesName} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'Species 123' } });

		const message = 'Species Name: No numbers or special characters allowed!';
    	expect(
    		//screen.getByText('ERROR')
			screen.getByText(new RegExp(message, "i"))
    	//).not.toBeInTheDocument();
		).toBeInTheDocument();
    });