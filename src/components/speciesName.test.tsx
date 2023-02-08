import { render } from '@testing-library/react';
import SpeciesName from './speciesName';


test('renders a SpeciesName', () => {
	render(<SpeciesName 
		id = "speciesNameId"
		 type="speciesNameType"
		speciesName="humans" 
		onChangeSpeciesName="humans"n/>);
	const divElement = screen.getByRole("contentinfo");
	expect(divElement).toHaveTextContent("humans");
	expect(divElement).toHaveAttribute("role", "contentinfo");
  });