import {render, fireEvent, screen} from '@testing-library/react'
import ReasonSparing,  {ReasonSparingProps} from './reasonSparing';
import  user  from '@testing-library/user-event';

test(`renders a ReasonSparing,
	Checks if there is the phrase Reason for sparing: in the label line`, async () => {
	const onChangeReasonSparingImplementation = jest.fn(() => "test");
	const mockReasonSparing: ReasonSparingProps = {
		id: 'id',
		type: 'type',
		reasonSparing: 'Reason for sparing',
		onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	render(<ReasonSparing {...mockReasonSparing} />);
	expect(screen.getByText('Reason for sparing:')).toBeInTheDocument();
	expect(screen.getByDisplayValue(mockReasonSparing.reasonSparing)).toBeInTheDocument();
});

test(`renders a ReasonSparing,,
correctly calls handle change,
change the value of the textbox and check if the change took place`, async () => {
const onChangeReasonSparingImplementation = jest.fn(() => "test");
const mockReasonSparing: ReasonSparingProps = {
	id: 'id',
	type: 'type',
	reasonSparing: 'Reason for sparing',
	onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	render(<ReasonSparing {...mockReasonSparing} />);

	const input = screen.getByRole('textbox');
	await user.type(input, 'elephant');
	expect(mockReasonSparing.onChangeReasonSparing).toHaveBeenCalledTimes(8);
});

//For the second part of the tests, I kept Neil's example using it instead of test, 
//but I kept test in my phase one to remember the two cases
it(`Given the required props,
	When the component ReasonSparing is rendered,
	Then the appointment description should be present`, () => {
	const onChangeReasonSparingImplementation = jest.fn();
	const mockReasonSparing: ReasonSparingProps = {
		id: 'id',
		type: 'type',
		reasonSparing: 'Reason for sparing',
		onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	render(<ReasonSparing {...mockReasonSparing} />);

	expect(
		screen.getByText('Reason for sparing:')
	).toBeInTheDocument();
});

it(`Given the required props,
	When the component ReasonSparing is rendered,
	change the value of the textbox putting 16 letters and check the error message in the component`, () => {
	const onChangeReasonSparingImplementation = jest.fn();
	const mockReasonSparing: ReasonSparingProps = {
		id: 'id',
		type: 'type',
		reasonSparing: 'Reason for sparing',
		onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	render(<ReasonSparing {...mockReasonSparing} />);

	const input = screen.getByRole('textbox');
	fireEvent.change(input, { target: { value: 'abcdefghijklmnop' } });

	const message = 'Reason for sparing: Must be between 17 and 153 characters.';
	expect(
		//screen.getByText('ERROR')
		screen.getByText(new RegExp(message, "i"))
	//).not.toBeInTheDocument();
	).toBeInTheDocument();
});

it(`Given the required props,
	When the component ReasonSparing is rendered,
	change the textbox value putting 154 letters and check the error message in the component`, () => {
	const onChangeReasonSparingImplementation = jest.fn(() => "test");
	const mockReasonSparing: ReasonSparingProps = {
		id: 'id',
		type: 'type',
		reasonSparing: 'Reason for sparing',
		onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	render(<ReasonSparing {...mockReasonSparing} />);

	const input = screen.getByRole('textbox');
	fireEvent.change(input, { target: { value: 'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioaaaaaaaaaaaaaa' } });

	const message = 'Reason for sparing: Must be between 17 and 153 characters.';
	expect(
		//screen.getByText('ERROR')
		screen.getByText(new RegExp(message, "i"))
	//).not.toBeInTheDocument();
	).toBeInTheDocument();
});