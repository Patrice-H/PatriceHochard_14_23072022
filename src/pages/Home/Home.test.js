import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks';
import Home from './index';

jest.mock('../../utils/hooks');

describe('Home page test suites', () => {
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render home page title', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expectedTitle = screen.getByText('HRnet');
    expect(expectedTitle).toBeInTheDocument();
  });

  it('Should render employees page link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expectedLink = screen.getByText('View Current Employees');
    expect(expectedLink).toBeInTheDocument();
  });

  it('Should render create employee subtitle', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expectedSubtitle = screen.getByText('Create Employee');
    expect(expectedSubtitle).toBeInTheDocument();
  });

  it('Should render address fieldset', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expectedSubtitle = screen.getByText('Address');
    expect(expectedSubtitle).toBeInTheDocument();
  });

  it('Should open a modal when user add an employee', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const dateOfBirthInput = screen.getByLabelText('Date of Birth');
    const startDateInput = screen.getByLabelText('Start Date');
    const streetInput = screen.getByLabelText('Street');
    const cityInput = screen.getByLabelText('City');
    const ZipCodeInput = screen.getByLabelText('Zip Code');
    const modal = screen.getByTestId('modal');
    const button = screen.getByText('Save');

    // Filling the form
    fireEvent.change(firstNameInput, { target: { value: 'firstName' } });
    fireEvent.change(lastNameInput, { target: { value: 'lastName' } });
    fireEvent.change(dateOfBirthInput, { target: { value: new Date() } });
    fireEvent.change(startDateInput, { target: { value: new Date() } });
    fireEvent.change(streetInput, { target: { value: 'street' } });
    fireEvent.change(cityInput, { target: { value: 'city' } });
    fireEvent.change(ZipCodeInput, { target: { value: 99999 } });

    // Test before submit form
    expect(modal.classList.contains('hidden')).toEqual(true);

    // test after submit form
    fireEvent.click(button);
    await waitFor(() => {
      expect(modal.classList.contains('hidden')).toEqual(false);
    });
  });
});
