import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import GlobalFilter from './index';

const setFilter = jest.fn();
const gotoPage = jest.fn();

const renderComponents = () => {
  render(
    <Provider store={store}>
      <GlobalFilter setFilter={setFilter} gotoPage={gotoPage} />
    </Provider>
  );
};

describe('GlobalFilter tests suite', () => {
  it('Should render a label with the expected text', () => {
    renderComponents();
    const label = screen.getByText('Search:');
    expect(label).toBeInTheDocument();
  });

  it('Sould render an input text', () => {
    renderComponents();
    const input = screen.getByLabelText('Search:');
    expect(input).toBeInTheDocument();
  });

  it('Should update state when user change input value', () => {
    renderComponents();
    const input = screen.getByLabelText('Search:');

    //Initial state test
    const initialState = store.getState();
    expect(initialState.displayOptions.searchFilter).toBe('');

    // User fills in the input field with the word test
    userEvent.type(input, 'test');
    const stateUpdated1 = store.getState();
    expect(stateUpdated1.displayOptions.searchFilter).toBe('test');

    // User remove the text in the input field
    input.setSelectionRange(0, 4);
    userEvent.type(input, '{backspace}');
    const stateUpdated2 = store.getState();
    expect(stateUpdated2.displayOptions.searchFilter).toBe('');
  });

  it('Should reset filter when user click on reset button', () => {
    renderComponents();
    const input = screen.getByLabelText('Search:');

    // User fills in the input field with the word test
    userEvent.type(input, 'test');
    const stateUpdated1 = store.getState();
    expect(stateUpdated1.displayOptions.searchFilter).toBe('test');

    // User remove the text in the input field
    const resetBtn = screen.getByTestId('reset-filter-btn');
    userEvent.click(resetBtn);
    const stateUpdated2 = store.getState();
    expect(stateUpdated2.displayOptions.searchFilter).toBe('');
    expect(input.value).toEqual('');
  });
});
