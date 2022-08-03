import { render, screen } from '@testing-library/react';
import { useAppDispatch } from '../../utils/hooks';
import TableLength from './index';

jest.mock('../../utils/hooks');

describe('Table length suite tests', () => {
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
