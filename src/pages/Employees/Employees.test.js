import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';
import { mockedAppSelector } from '../../utils/testsUtils';
import Employees from './index';

jest.mock('../../utils/hooks');

const renderComponents = () => {
  render(
    <MemoryRouter>
      <Employees />
    </MemoryRouter>
  );
};

describe('Employees page test suites', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(mockedAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render employees page title', () => {
    renderComponents();
    const expectedTitle = screen.getByText('Current Employees');
    expect(expectedTitle).toBeInTheDocument();
  });

  it('Should render employees table', () => {
    renderComponents();
    const employeesTable = screen.getByTestId('employees-table');
    expect(employeesTable).toBeInTheDocument();
  });

  it('Should render home page link', () => {
    renderComponents();
    const expectedLink = screen.getByText('Home');
    expect(expectedLink).toBeInTheDocument();
  });
});
