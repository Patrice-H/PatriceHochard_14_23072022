import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';
import { mockedAppSelector } from '../../utils/testsUtils';
import Employees from './index';

jest.mock('../../utils/hooks');

describe('Employees page test suites', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(mockedAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render employees page title', () => {
    render(
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    );
    const expectedTitle = screen.getByText('Current Employees');
    expect(expectedTitle).toBeInTheDocument();
  });

  it('Should render table display options', () => {
    render(
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    );
    const tableDisplayOptions = screen.getByTestId('table-display-options');
    expect(tableDisplayOptions).toBeInTheDocument();
  });

  it('Should render employees table', () => {
    render(
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    );
    const employeesTable = screen.getByTestId('employees-table');
    expect(employeesTable).toBeInTheDocument();
  });

  it('Should render home page link', () => {
    render(
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    );
    const expectedLink = screen.getByText('Home');
    expect(expectedLink).toBeInTheDocument();
  });
});
