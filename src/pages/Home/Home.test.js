import { render, screen } from '@testing-library/react';
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
});
