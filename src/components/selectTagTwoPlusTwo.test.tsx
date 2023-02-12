import {render, fireEvent, screen} from '@testing-library/react'
import SelectTagTwoPlusTwo,  {SelectTagTwoPlusTwoProps} from './selectTagTwoPlusTwo';

test(`renders a SelectTagTwoPlusTwo,
	label The text must contain a sentence What is 2 + 2?`, async () => {
	const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
	const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
		id: 'id', 
		selectTagTwoPlusTwo: '',
		onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
	}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);
	const labelText = screen.getByText("What is 2 + 2?");
	expect(labelText).toBeInTheDocument();
	//expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
	//expect(screen.getByDisplayValue(mockSelectTagTwoPlusTwo.selectTagTwoPlusTwo)).toBeInTheDocument();
  });

test(`renders a SelectTagTwoPlusTwo,
checks if there are two elements in the option tag`, async () => {
const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
	id: 'id', 
	selectTagTwoPlusTwo: '',
	onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);
	const input = screen.getAllByRole('option');
	expect(input.length).toBe(2);
});

  
test(`renders a SelectTagTwoPlusTwo,
	Checks if the entered value contains within the option`, async () => {
	const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
	const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
	id: 'id', 
	selectTagTwoPlusTwo: '4',
	onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);
	const input = screen.getByDisplayValue('4');
	expect(input).toBeInTheDocument();
});

test(`renders a SelectTagTwoPlusTwo,
	Checks if the entered value Not 4 contains within the option`, async () => {
const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
	id: 'id', 
	selectTagTwoPlusTwo: 'Not 4',
	onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);
	const input = screen.getByDisplayValue('Not 4');
	expect(input).toBeInTheDocument();
});

//For the second part of the tests, I kept Neil's example using it instead of test, 
//but I kept test in my phase one to remember the two cases
it(`Given the required props,
	When the component SelectTagTwoPlusTwo is rendered,
	Then the appointment description should be present`, () => {
	const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
	const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
		id: 'id', 
		selectTagTwoPlusTwo: '',
		onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
	}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);

	expect(
		screen.getByText('What is 2 + 2?')
	).toBeInTheDocument();
});

it(`Given the required props,
	When the component SelectTagTwoPlusTwo is rendered,
	change the value of the combobox different from 4 and check the error message in the component`, () => {
	const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
	const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
		id: 'id', 
		selectTagTwoPlusTwo: '',
		onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
	}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);
	
	const input = screen.getByRole('combobox');
	expect(input).toBeInTheDocument();
	fireEvent.change(input, { target: { value: 'Not 4' } });

	const message = 'Error - In what is 2 + 2: 4 must be selected.';
	expect(
		screen.queryByText(new RegExp(message, "i"))
	).not.toBeInTheDocument();
});

it(`Given the required props,
	When the component SelectTagTwoPlusTwo is rendered,
	change the value of the combobox different from 4 that is not in the code combobox and check the error message in the component`, () => {
	const onChangeSelectTagTwoPlusTwoImplementation = jest.fn();
	const mockSelectTagTwoPlusTwo: SelectTagTwoPlusTwoProps = {
		id: 'id', 
		selectTagTwoPlusTwo: '',
		onChangeSelectTagTwoPlusTwo:onChangeSelectTagTwoPlusTwoImplementation
	}
	render(<SelectTagTwoPlusTwo {...mockSelectTagTwoPlusTwo} />);

	const input = screen.getByRole('combobox');
	expect(input).toBeInTheDocument();
	fireEvent.change(input, { target: { value: '5' } });

	const message = 'Error - In what is 2 + 2: 4 must be selected.';
	expect(
		//screen.getByText('ERROR')
		screen.queryByText(new RegExp(message, "i"))
	).not.toBeInTheDocument();
});