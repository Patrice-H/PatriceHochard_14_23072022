import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('Home page test suites', () => {
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
});
