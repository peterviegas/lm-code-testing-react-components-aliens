import {render, fireEvent, screen} from '@testing-library/react'
import SendFormW12,  {SendFormW12Props} from './sendFormW12';

test(`renders a SendFormW12,
	Checks if the title content is equal to Send`, async () => {
	const mockSendFormW12: SendFormW12Props = {
		title: 'Send',
		sendFormW12: true,
	}
	render(<SendFormW12 {...mockSendFormW12} />);
	const input = screen.getByText("Send");
	fireEvent.click(input);
  });

  test(`renders a SendFormW12,
  Checks if the title It is not empty`, async () => {
	const mockPlanetName: SendFormW12Props = {
		title: 'Send',
		sendFormW12: true,
	}
	  render(<SendFormW12 {...mockPlanetName} />);
	  const input = screen.getByText("Send");
	  fireEvent.emptied(input);
  });