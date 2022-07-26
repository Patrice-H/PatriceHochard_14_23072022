import { render, screen } from '@testing-library/react';
import { useAppSelector } from '../../../utils/hooks';
import { employeesList } from '../../../data/dataTest';
import TableEntriesIndicator from './index';

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

describe('TableEntriesIndicator tests suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render all of texts of component', () => {
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesIndicator total="3" />);
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
    render(<TableEntriesIndicator total="3" />);
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
    render(<TableEntriesIndicator total="3" />);
    const startIndex = screen.getByTestId('start-index');
    const endIndex = screen.getByTestId('end-index');
    const totalIndex = screen.getByTestId('total-index');
    expect(startIndex.innerHTML).toEqual('3');
    expect(endIndex.innerHTML).toEqual('3');
    expect(totalIndex.innerHTML).toEqual('3');
  });

  it('Should render additional text when table is filtered', () => {
    state.displayOptions.pageNumber = 1;
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesIndicator total="1" />);
    const additionalText = screen.getByTestId('additional-text');
    expect(additionalText).toBeInTheDocument();
  });

  it('Should render no entries when there are not data', () => {
    state.employees.list = [];
    useAppSelector.mockImplementation((f) => f(state));
    render(<TableEntriesIndicator total="0" />);
    const startIndex = screen.getByTestId('start-index');
    const endIndex = screen.getByTestId('end-index');
    const totalIndex = screen.getByTestId('total-index');
    expect(startIndex.innerHTML).toEqual('0');
    expect(endIndex.innerHTML).toEqual('0');
    expect(totalIndex.innerHTML).toEqual('0');
  });
});
