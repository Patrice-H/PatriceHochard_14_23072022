import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Employees from './index';

describe('Employees page test suites', () => {
  it('Should render employees page title', () => {
    render(
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    );
    const expectedTitle = screen.getByText('Current Employees');
    expect(expectedTitle).toBeInTheDocument();
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
