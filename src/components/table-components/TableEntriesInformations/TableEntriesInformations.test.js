import { render, screen } from '@testing-library/react';
import { useAppSelector } from '../../../utils/hooks';
import { employeesList } from '../../../data/dataTest';
import TableEntriesInformations from './index';

jest.mock('../../../utils/hooks');

let state = {
  employees: {
    list: employeesList,
  },
  displayOptions: {
    sortBy: '',
    orderBy: '',
    tableLength: 2,
    pageNumber: 1,
    searchFilter: null,
  },
};

describe('Table entries informations tests suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render all information texts', () => {
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesInformations />);
    const showing = screen.getByText('Showing');
    const to = screen.getByText('to');
    const of = screen.getByText('of');
    const entries = screen.getByText('entries');
    expect(showing).toBeInTheDocument();
    expect(to).toBeInTheDocument();
    expect(of).toBeInTheDocument();
    expect(entries).toBeInTheDocument();
  });

  it('Should render rigth number of entries on page 1', () => {
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesInformations />);
    const startIndex = screen.getByTestId('start-index');
    const endIndex = screen.getByTestId('end-index');
    const totalIndex = screen.getByTestId('total-index');
    expect(startIndex.innerHTML).toEqual('1');
    expect(endIndex.innerHTML).toEqual('2');
    expect(totalIndex.innerHTML).toEqual('3');
  });

  it('Should render rigth number of entries on page 2', () => {
    state.displayOptions.pageNumber = 2;
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesInformations />);
    const startIndex = screen.getByTestId('start-index');
    const endIndex = screen.getByTestId('end-index');
    const totalIndex = screen.getByTestId('total-index');
    expect(startIndex.innerHTML).toEqual('3');
    expect(endIndex.innerHTML).toEqual('3');
    expect(totalIndex.innerHTML).toEqual('3');
  });
});
