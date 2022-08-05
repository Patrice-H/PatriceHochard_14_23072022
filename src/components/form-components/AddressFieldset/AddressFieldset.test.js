import { render, screen } from '@testing-library/react';
import AddressFieldset from './index';

describe('Address fieldset test suites', () => {
  it('Should render street input with its label', () => {
    render(<AddressFieldset />);
    const element = 'Street';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render city input with its label', () => {
    render(<AddressFieldset />);
    const element = 'City';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render state drop down with its label', () => {
    render(<AddressFieldset />);
    const element = 'State';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should render zip code input with its label', () => {
    render(<AddressFieldset />);
    const element = 'Zip Code';
    const label = screen.getByText(element);
    const input = screen.getByLabelText(element);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
