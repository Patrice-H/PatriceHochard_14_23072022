import { render, screen } from '@testing-library/react';
import DateInput from './index';

describe('Input type date test suites', () => {
  it('Should render a label with the expected text', () => {
    const props = 'Component Test';
    render(<DateInput labelContent={props} />);
    const label = screen.getByText(props);
    expect(label).toBeInTheDocument();
  });

  it('Should render an input with the expected id', () => {
    const props = 'Component Test';
    render(<DateInput labelContent={props} />);
    const input = screen.getByLabelText(props);
    expect(input.id).toBe('component-test');
  });
});
