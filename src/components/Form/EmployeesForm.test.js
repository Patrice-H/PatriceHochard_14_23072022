import { render, screen } from '@testing-library/react';
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
});
