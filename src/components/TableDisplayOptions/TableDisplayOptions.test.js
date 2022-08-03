import { render, screen } from '@testing-library/react';
import { useAppDispatch } from '../../utils/hooks';
import TableDisplayOptions from './index';

jest.mock('../../utils/hooks');

describe('Table display options tests suite', () => {
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
