import {render, screen} from '@testing-library/react'
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