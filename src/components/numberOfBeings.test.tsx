import {render, screen} from '@testing-library/react'
import NumberOfBeings,  {NumberOfBeingsProps} from './numberOfBeings';
import  user  from '@testing-library/user-event';

test(`renders a NumberOfBeings,
	checks if the name that will appear in the label is equal to Number of beings:`, async () => {
	const onChangeSpeciesNameImplementation = jest.fn();
	const mocknumberOfBeings: NumberOfBeingsProps = {
		id: 'id',
		type: 'type',
		numberOfBeings: 8,
		onChangeNumberOfBeings: onChangeSpeciesNameImplementation
	}
	render(<NumberOfBeings {...mocknumberOfBeings} />);
	//const divElement = screen.getByText("humans");
	expect(screen.getByText('Number of beings:')).toBeInTheDocument();
	expect(screen.getByDisplayValue(mocknumberOfBeings.numberOfBeings)).toBeInTheDocument();
  });

  test(`renders a NumberOfBeings,
  	changing the value of the textbox and checking the character size.`, async () => {
	const onChangeSpeciesNameImplementation = jest.fn();
	const mocknumberOfBeings: NumberOfBeingsProps = {
		id: 'id',
		type: 'type',
		numberOfBeings: 9,
		onChangeNumberOfBeings: onChangeSpeciesNameImplementation
	}
	  render(<NumberOfBeings {...mocknumberOfBeings} />);
	  const input = screen.getByRole('textbox');
	  await user.type(input, 'elephant');
	  expect(mocknumberOfBeings.onChangeNumberOfBeings).toHaveBeenCalledTimes(8);
  });

  test(`renders a NumberOfBeings2,
  passing a value to the numberOfBeings field and checking its validity in displayVaue`, async () => {
	const onChangeSpeciesNameImplementation = jest.fn();
	const mocknumberOfBeings: NumberOfBeingsProps = {
		id: 'id',
		type: 'type',
		numberOfBeings: 1000000,
		onChangeNumberOfBeings: onChangeSpeciesNameImplementation
	}
	  render(<NumberOfBeings {...mocknumberOfBeings} />);
	  const input = screen.getByDisplayValue(1000000);
      expect(input).toBeInTheDocument();
  });
