import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TableLength from './index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

describe('Table length suite tests', () => {
  it('Should render a label with the expected text', () => {
    render(
      <Provider store={store}>
        <TableLength />
      </Provider>
    );
    const label = screen.getByText(/Show/);
    expect(label).toBeInTheDocument();
  });

  it('Sould render a select drop down', () => {
    render(
      <Provider store={store}>
        <TableLength />
      </Provider>
    );
    const select = screen.getByTestId('select-table-length');
    expect(select).toBeInTheDocument();
  });

  it('Should correctly set default option', () => {
    render(
      <Provider store={store}>
        <TableLength />
      </Provider>
    );
    const select = screen.getByTestId('select-table-length');
    expect(select.value).toBe('10');
  });

  it('Should allow user to change the number of option', () => {
    render(
      <Provider store={store}>
        <TableLength />
      </Provider>
    );
    const select = screen.getByTestId('select-table-length');
    userEvent.selectOptions(select, screen.getByText('25'));
    expect(select.value).toBe('25');
  });
});
