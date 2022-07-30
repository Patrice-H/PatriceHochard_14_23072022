import { render, screen } from '@testing-library/react';
import TableFilter from './index';

describe('Table filter suite tests', () => {
  it('Should render a label with the expected text', () => {
    render(<TableFilter />);
    const label = screen.getByText('Search:');
    expect(label).toBeInTheDocument();
  });

  it('Sould render an input text', () => {
    render(<TableFilter />);
    const input = screen.getByLabelText('Search:');
    expect(input).toBeInTheDocument();
  });
});
