import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import TableEntriesManager from './index';

const setPageSize = jest.fn();

const renderComponents = () => {
  render(
    <Provider store={store}>
      <TableEntriesManager pageSize="10" setPageSize={setPageSize} />
    </Provider>
  );
};

describe('TableEntriesManager tests suite', () => {
  it('Should render a label with the expected text', () => {
    renderComponents();
    const label = screen.getByText(/Show/);
    expect(label).toBeInTheDocument();
  });

  it('Sould render a select drop down', () => {
    renderComponents();
    const select = screen.getByTestId('select-table-length');
    expect(select).toBeInTheDocument();
  });

  it('Should correctly set default option', () => {
    renderComponents();
    const select = screen.getByTestId('select-table-length');
    expect(select.value).toBe('10');
  });

  it('Should allow user to change the number of option', () => {
    renderComponents();
    const select = screen.getByTestId('select-table-length');
    userEvent.selectOptions(select, screen.getByText('25'));
    expect(store.getState().displayOptions.tableLength).toEqual(25);
  });
});
