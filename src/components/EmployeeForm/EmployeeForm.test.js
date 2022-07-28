import { render, screen } from '@testing-library/react';
import { useAppDispatch } from '../../utils/hooks';
import EmployeeForm from './index';

jest.mock('../../utils/hooks');

describe('Employee form test suites', () => {
  beforeEach(() => {
    useAppDispatch.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render first name input with its label', () => {
    render(<EmployeeForm />);
    const element = 'First Name';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render last name input with its label', () => {
    render(<EmployeeForm />);
    const element = 'Last Name';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render date of birth input with its label', () => {
    render(<EmployeeForm />);
    const element = 'Date of Birth';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render start date input with its label', () => {
    render(<EmployeeForm />);
    const element = 'Start Date';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render address fieldset', () => {
    render(<EmployeeForm />);
    const element = 'Address';
    const fieldset = screen.getByText(element);
    expect(fieldset).toBeInTheDocument();
  });

  it('Should render department drop down with its label', () => {
    render(<EmployeeForm />);
    const element = 'Department';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render submit button', () => {
    render(<EmployeeForm />);
    const element = 'Save';
    const button = screen.getByText(element);
    expect(button).toBeInTheDocument();
  });
});
