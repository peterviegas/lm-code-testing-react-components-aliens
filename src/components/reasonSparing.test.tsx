import {render, screen} from '@testing-library/react'
import ReasonSparing,  {ReasonSparingProps} from './reasonSparing';
import  user  from '@testing-library/user-event';

test('renders a SpeciesName', async () => {
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

  test('correctly calls handle change', async () => {
	const onChangeReasonSparingImplementation = jest.fn(() => "test");
	const mockReasonSparing: ReasonSparingProps = {
		id: 'id',
		type: 'type',
		reasonSparing: 'Reason for sparing',
		onChangeReasonSparing:onChangeReasonSparingImplementation
	}
	  render(<ReasonSparing {...mockReasonSparing} />);
	  //await user.type(screen.getByLabelText(labelText),"123");
	  const input = screen.getByRole('textbox');
	  await user.type(input, 'elephant');
	  expect(mockReasonSparing.onChangeReasonSparing).toHaveBeenCalledTimes(8);
  });