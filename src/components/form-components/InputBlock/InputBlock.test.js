import { render, screen } from '@testing-library/react';
import InputBlock from './index';

describe('Input any type test suites', () => {
  it('Should render a label with the expected text', () => {
    const labelContent = 'Component Test';
    render(<InputBlock labelContent={labelContent} elementType="text" />);
    const label = screen.getByText(labelContent);
    expect(label).toBeInTheDocument();
  });

  it('Should render an input with the expected id', () => {
    const labelContent = 'Component Test';
    render(<InputBlock labelContent={labelContent} elementType="text" />);
    const input = screen.getByLabelText(labelContent);
    expect(input.id).toBe('component-test');
  });
});
