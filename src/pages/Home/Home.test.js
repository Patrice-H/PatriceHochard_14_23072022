import { fireEvent, render, screen } from '@testing-library/react';
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

  it('Should open a modal when user add an employee', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const modal = screen.getByTestId('modal');
    const button = screen.getByText('Save');
    expect(modal.classList.contains('hidden')).toEqual(true);
    fireEvent.click(button);
    expect(modal.classList.contains('hidden')).toEqual(false);
  });

  it('Should close the modal when user click on close button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const modal = screen.getByTestId('modal');
    const openButton = screen.getByText('Save');
    fireEvent.click(openButton);
    const closeButton = screen.getByTestId('close-modal-btn');
    fireEvent.click(closeButton);
    expect(modal.classList.contains('hidden')).toEqual(true);
  });
});
