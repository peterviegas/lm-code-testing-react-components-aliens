import {render, fireEvent, screen} from '@testing-library/react'
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

  //For the second part of the tests, I kept Neil's example using it instead of test, 
  //but I kept test in my phase one to remember the two cases
  it(`Given the required props,
		When the component NumberOfBeings is rendered,
		Then the appointment description should be present`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mocknumberOfBeings: NumberOfBeingsProps = {
			id: 'id',
			type: 'type',
			numberOfBeings: 1000000,
			onChangeNumberOfBeings: onChangeSpeciesNameImplementation
		}
		render(<NumberOfBeings {...mocknumberOfBeings} />);

    	expect(
    		screen.getByText('Number of beings:')
    	).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component NumberOfBeings is rendered,
		change the value of the textbox to less than 1,000,000,000 and check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mocknumberOfBeings: NumberOfBeingsProps = {
			id: 'id',
			type: 'type',
			numberOfBeings: 1000000,
			onChangeNumberOfBeings: onChangeSpeciesNameImplementation
		}
		render(<NumberOfBeings {...mocknumberOfBeings} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 2 } });

		const message = 'Number of beings: Must be at least 1,000,000,000.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component NumberOfBeings is rendered,
		change the textbox value to less than 1,000,000,000 and check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mocknumberOfBeings: NumberOfBeingsProps = {
			id: 'id',
			type: 'type',
			numberOfBeings: 1000000,
			onChangeNumberOfBeings: onChangeSpeciesNameImplementation
		}
		render(<NumberOfBeings {...mocknumberOfBeings} />);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 999999999 } });

		const message = 'Number of beings: Must be at least 1,000,000,000.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component NumberOfBeings is rendered,
		change the textbox value character special
		check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mocknumberOfBeings: NumberOfBeingsProps = {
			id: 'id',
			type: 'type',
			numberOfBeings: 1000000,
			onChangeNumberOfBeings: onChangeSpeciesNameImplementation
		}
		render(<NumberOfBeings {...mocknumberOfBeings} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'action = ação.' } });

		const message = 'Number of beings: Numbers ONLY.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });

	it(`Given the required props,
		When the component NumberOfBeings is rendered,
		change the textbox mixed values numbers and letters
		check the error message in the component`, () => {
		const onChangeSpeciesNameImplementation = jest.fn();
		const mocknumberOfBeings: NumberOfBeingsProps = {
			id: 'id',
			type: 'type',
			numberOfBeings: 1000000,
			onChangeNumberOfBeings: onChangeSpeciesNameImplementation
		}
		render(<NumberOfBeings {...mocknumberOfBeings} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'Species 123' } });

		const message = 'Number of beings: Numbers ONLY.';
    	expect(
			screen.getByText(new RegExp(message, "i"))
		).toBeInTheDocument();
    });
