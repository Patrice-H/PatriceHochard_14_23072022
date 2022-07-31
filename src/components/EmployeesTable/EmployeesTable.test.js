import { render, screen } from '@testing-library/react';
import { useAppSelector } from '../../utils/hooks';
import { mockedAppSelector } from '../../utils/testsUtils';
import EmployeesTable from './index';

jest.mock('../../utils/hooks');

describe('Employees table tests suite', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(mockedAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render first name colunm', () => {
    render(<EmployeesTable />);
    const firstName = screen.getByText('First Name');
    expect(firstName).toBeInTheDocument();
  });

  it('Should render last name colunm', () => {
    render(<EmployeesTable />);
    const lastName = screen.getByText('Last Name');
    expect(lastName).toBeInTheDocument();
  });

  it('Should render start date colunm', () => {
    render(<EmployeesTable />);
    const startDate = screen.getByText('Start Date');
    expect(startDate).toBeInTheDocument();
  });

  it('Should render department colunm', () => {
    render(<EmployeesTable />);
    const department = screen.getByText('Department');
    expect(department).toBeInTheDocument();
  });

  it('Should render date of birth colunm', () => {
    render(<EmployeesTable />);
    const dateOfBirth = screen.getByText('Date of Birth');
    expect(dateOfBirth).toBeInTheDocument();
  });

  it('Should render street colunm', () => {
    render(<EmployeesTable />);
    const street = screen.getByText('Street');
    expect(street).toBeInTheDocument();
  });

  it('Should render city colunm', () => {
    render(<EmployeesTable />);
    const city = screen.getByText('City');
    expect(city).toBeInTheDocument();
  });

  it('Should render state colunm', () => {
    render(<EmployeesTable />);
    const state = screen.getByText('State');
    expect(state).toBeInTheDocument();
  });

  it('Should render zip code colunm', () => {
    render(<EmployeesTable />);
    const zipCode = screen.getByText('Zip Code');
    expect(zipCode).toBeInTheDocument();
  });
});
