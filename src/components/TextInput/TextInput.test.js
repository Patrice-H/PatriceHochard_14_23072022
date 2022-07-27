import { render, screen } from '@testing-library/react';
import TextInput from './index';

describe('Input type text test suites', () => {
  it('Should render a label with the expected text', () => {
    const props = 'Component Test';
    render(<TextInput labelContent={props} />);
    const label = screen.getByText(props);
    expect(label).toBeInTheDocument();
  });

  it('Should render an input with the expected id', () => {
    const props = 'Component Test';
    render(<TextInput labelContent={props} />);
    const input = screen.getByLabelText(props);
    expect(input.id).toBe('component-test');
  });
});
