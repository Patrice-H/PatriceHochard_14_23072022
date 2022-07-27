import { render, screen } from '@testing-library/react';
import SelectDropDown from './index';

describe('Drop down test suites', () => {
  it('Should render the state drop down and its label', () => {
    const expectedText = 'State';
    render(<SelectDropDown labelContent={expectedText} />);
    const label = screen.getByText(expectedText);
    const input = screen.getByLabelText(expectedText);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render the department drop down and its label', () => {
    const expectedText = 'Department';
    render(<SelectDropDown labelContent={expectedText} />);
    const label = screen.getByText(expectedText);
    const input = screen.getByLabelText(expectedText);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
