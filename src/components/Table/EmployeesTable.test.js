import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { mockedStore } from '../../utils/testsUtils';
import EmployeesTable from './index';

const renderComponents = () => {
  render(
    <Provider store={store}>
      <EmployeesTable />
    </Provider>
  );
};

describe('EmployeesTable tests suite', () => {
  /* Component integrity tests */

  it('Should render all components', () => {
    renderComponents();
    const headerOptions = screen.getByTestId('table-header-options');
    const table = screen.getByTestId('employees-table');
    const footerOptions = screen.getByTestId('table-footer-options');
    expect(headerOptions).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(footerOptions).toBeInTheDocument();
  });

  it('Should render all colums content', () => {
    renderComponents();
    const firstName = screen.getByText('First Name');
    const lastName = screen.getByText('Last Name');
    const startDate = screen.getByText('Start Date');
    const department = screen.getByText('Department');
    const dateOfBirth = screen.getByText('Date of Birth');
    const street = screen.getByText('Street');
    const city = screen.getByText('City');
    const state = screen.getByText('State');
    const zipCode = screen.getByText('Zip Code');
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(startDate).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(dateOfBirth).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zipCode).toBeInTheDocument();
  });

  /* Component functionalities tests */

  it('Should update sortBy and orderBy states in store when user click on column header', () => {
    renderComponents();
    const firstName = screen.getByTestId('firstName');

    // Test before click on column header
    expect(store.getState().displayOptions.sortBy).toEqual(null);
    expect(store.getState().displayOptions.orderBy).toEqual(null);

    // Test after one click
    userEvent.click(firstName);
    expect(store.getState().displayOptions.sortBy).toEqual('first-name');
    expect(store.getState().displayOptions.orderBy).toEqual('ascending');

    // Test after two click
    userEvent.click(firstName);
    expect(store.getState().displayOptions.sortBy).toEqual('first-name');
    expect(store.getState().displayOptions.orderBy).toEqual('descending');

    // Test after three click
    userEvent.click(firstName);
    expect(store.getState().displayOptions.sortBy).toEqual(null);
    expect(store.getState().displayOptions.orderBy).toEqual(null);
  });

  it('Should be able to navigate to next and previous page', () => {
    render(
      <Provider store={mockedStore}>
        <EmployeesTable />
      </Provider>
    );
    const nextBtn = screen.getByText('Next');
    const previousBtn = screen.getByText('Previous');

    // Test before click on next page button
    expect(mockedStore.getState().displayOptions.pageNumber).toEqual(1);

    // Test after click on next page button
    userEvent.click(nextBtn);
    expect(mockedStore.getState().displayOptions.pageNumber).toEqual(2);

    // Test after click on previous page button
    userEvent.click(previousBtn);
    expect(mockedStore.getState().displayOptions.pageNumber).toEqual(1);
  });

  it('Should be able to navigate to a specific page', () => {
    render(
      <Provider store={mockedStore}>
        <EmployeesTable />
      </Provider>
    );
    const button2 = screen.getByTestId('page-btn-2');

    // Test before click on button to go to page 2
    expect(mockedStore.getState().displayOptions.pageNumber).toEqual(1);

    // Test after click on button to go to page 2
    userEvent.click(button2);
    expect(mockedStore.getState().displayOptions.pageNumber).toEqual(2);
  });
});
