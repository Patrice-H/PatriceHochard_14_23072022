import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import TableFilter from './index';

describe('Table filter suite tests', () => {
  it('Should render a label with the expected text', () => {
    render(
      <Provider store={store}>
        <TableFilter />
      </Provider>
    );
    const label = screen.getByText('Search:');
    expect(label).toBeInTheDocument();
  });

  it('Sould render an input text', () => {
    render(
      <Provider store={store}>
        <TableFilter />
      </Provider>
    );
    const input = screen.getByLabelText('Search:');
    expect(input).toBeInTheDocument();
  });

  it('Should update state when user change input value', () => {
    render(
      <Provider store={store}>
        <TableFilter />
      </Provider>
    );
    const input = screen.getByLabelText('Search:');

    //Initial state test
    const initialState = store.getState();
    expect(initialState.displayOptions.searchFilter).toBe(null);

    // User fills in the input field with the word test
    userEvent.type(input, 'test');
    const stateUpdated1 = store.getState();
    expect(stateUpdated1.displayOptions.searchFilter).toBe('test');

    // User remove the text in the input field
    input.setSelectionRange(0, 4);
    userEvent.type(input, '{backspace}');
    const stateUpdated2 = store.getState();
    expect(stateUpdated2.displayOptions.searchFilter).toBe(null);
  });
});
