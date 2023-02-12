import {render, fireEvent, screen} from '@testing-library/react'
import DisplayData,  {DisplayDataProps} from './displayData';

test(`renders a NumberOfBeings ,
	checks if the name that will appear in the label is equal to Number of beings:`, async () => {
	const mocknumberOfBeings: DisplayDataProps = {
		speciesName: 'humans',
		planetName: 'Planet Earth',
		numberOfBeings: 8,
		selectTagTwoPlusTwo: '4',
		reasonSparing: 'Reason for sparing',
		sendFormW12: true,
	}
	render(<DisplayData {...mocknumberOfBeings} />);
	let input = screen.getByText("Display Data");
	fireEvent.emptied(input);
	expect(screen.getByText('Display Data')).toBeInTheDocument();
	input = screen.getByText(mocknumberOfBeings.speciesName, { exact: false });
	fireEvent.emptied(input);
	input = screen.getByText(mocknumberOfBeings.planetName, { exact: false });
	fireEvent.emptied(input);
	input = screen.getByText(mocknumberOfBeings.numberOfBeings, { exact: false });
	fireEvent.emptied(input);
	input = screen.getByText(mocknumberOfBeings.selectTagTwoPlusTwo, { exact: false });
	fireEvent.emptied(input);
	input = screen.getByText(mocknumberOfBeings.reasonSparing, { exact: false });
	fireEvent.emptied(input);
});


test(`renders a NumberOfBeings,
	checks if the name that will appear in the label is equal to Number of beings:`, async () => {
	const mocknumberOfBeings: DisplayDataProps = {
		speciesName: 'humans',
		planetName: 'Planet Earth',
		numberOfBeings: 8,
		selectTagTwoPlusTwo: '4',
		reasonSparing: 'Reason for sparing',
		sendFormW12: true,
	}
	render(<DisplayData {...mocknumberOfBeings} />);
	let input = screen.getByText(mocknumberOfBeings.speciesName, { exact: false });
	expect(input).toBeInTheDocument();
	input = screen.getByText(mocknumberOfBeings.planetName, { exact: false });
	expect(input).toBeInTheDocument();
	input = screen.getByText(mocknumberOfBeings.numberOfBeings, { exact: false });
	expect(input).toBeInTheDocument();
	input = screen.getByText(mocknumberOfBeings.selectTagTwoPlusTwo, { exact: false });
	expect(input).toBeInTheDocument();
	input = screen.getByText(mocknumberOfBeings.reasonSparing, { exact: false });
	expect(input).toBeInTheDocument();
});
