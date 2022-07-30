import { render, screen } from '@testing-library/react';
import TableLength from './index';

describe('Table length suite tests', () => {
  it('Should render a label with the expected text', () => {
    render(<TableLength />);
    const label = screen.getByText(/Show/);
    expect(label).toBeInTheDocument();
  });

  it('Sould render a select drop down', () => {
    render(<TableLength />);
    const select = screen.getByTestId('select-table-length');
    expect(select).toBeInTheDocument();
  });
});
