import { render, screen } from '@testing-library/react';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { mockedAppSelector } from '../../../utils/testsUtils';
import SortButton from './index';

jest.mock('../../../utils/hooks');

describe('Sort button tests suite', () => {
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the default sort button', () => {
    useAppSelector.mockImplementation(mockedAppSelector);
    render(<SortButton elementType="test" />);
    const btn = screen.getByAltText('Sort Button');
    expect(btn).toBeInTheDocument();
    expect(btn.src.split('/')[3]).toBe('sort-btn.png');
  });

  it('Should render the ascending sort button', () => {
    const state = {
      employees: {
        list: [],
      },
      displayOptions: {
        sortBy: 'test',
        orderBy: 'ascending',
      },
    };
    useAppSelector.mockImplementation((f) => f(state));
    render(<SortButton elementType="test" />);
    const btn = screen.getByAltText('Sort Button');
    expect(btn).toBeInTheDocument();
    expect(btn.src.split('/')[3]).toBe('sort-asc-btn.png');
  });

  it('Should render the descending sort button', () => {
    const state = {
      employees: {
        list: [],
      },
      displayOptions: {
        sortBy: 'test',
        orderBy: 'descending',
      },
    };
    useAppSelector.mockImplementation((f) => f(state));
    render(<SortButton elementType="test" />);
    const btn = screen.getByAltText('Sort Button');
    expect(btn).toBeInTheDocument();
    expect(btn.src.split('/')[3]).toBe('sort-desc-btn.png');
  });
});
