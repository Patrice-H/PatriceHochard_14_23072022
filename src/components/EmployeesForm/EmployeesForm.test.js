import { render, screen } from '@testing-library/react';
//import { fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
//import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import EmployeesForm from './index';

describe('Employees form tests suite', () => {
  it('Should render the form component', () => {
    render(
      <Provider store={store}>
        <EmployeesForm />
      </Provider>
    );
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
  /*
  it('input invalide', async () => {
    render(
      <Provider store={store}>
        <EmployeesForm />
      </Provider>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    const errorMessage = screen.getByTestId('error-first-name');
    const button = screen.getByText('Save');
    // eslint-disable-next-line testing-library/no-node-access
    //const errorMessage = document.getElementById('error-first-name');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.type(firstNameInput, 'g1');
      fireEvent.click(button);
      console.log('first name : ' + firstNameInput.value);
      console.log('error : ' + errorMessage.innerHTML);
    });
  });
  /*
  it('chargement complet du formulaire', async () => {
    render(
      <Provider store={store}>
        <EmployeesForm />
      </Provider>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const dateOfBirthInput = screen.getByLabelText('Date of Birth');
    const startDateInput = screen.getByLabelText('Start Date');
    const streetInput = screen.getByLabelText('Street');
    const cityInput = screen.getByLabelText('City');
    //const ZipCodeInput = screen.getByLabelText('Zip Code');
    const button = screen.getByText('Save');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(dateOfBirthInput, {
        target: {
          value: new Date(),
        },
      });
      fireEvent.change(startDateInput, {
        target: {
          value: new Date(),
        },
      });
      fireEvent.change(firstNameInput, {
        target: {
          value: 'test',
        },
      });
      fireEvent.change(lastNameInput, {
        target: {
          value: 'test',
        },
      });
      fireEvent.change(streetInput, {
        target: {
          value: 'test',
        },
      });
      fireEvent.change(cityInput, {
        target: {
          value: 'test',
        },
      });

      //fireEvent.change(ZipCodeInput, {
      //target: {
      //value: 88888,
      //},
      //});

      fireEvent.click(button);
    });

    expect(firstNameInput.value).toEqual('test');
    console.log(store.getState().employees.list);
  });
  */
});
