import { render, screen } from '@testing-library/react';
import TableDisplayOptions from './index';

describe('Table display options tests suite', () => {
  it('Should render table length component', () => {
    render(<TableDisplayOptions />);
    const tableLength = screen.getByTestId('table-length');
    expect(tableLength).toBeInTheDocument();
  });

  it('Should render table filter component', () => {
    render(<TableDisplayOptions />);
    const tableFilter = screen.getByTestId('table-filter');
    expect(tableFilter).toBeInTheDocument();
  });
});
