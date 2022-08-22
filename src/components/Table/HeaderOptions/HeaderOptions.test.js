import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import HeaderOptions from './index';

const renderComponents = () => {
  render(
    <Provider store={store}>
      <HeaderOptions />
    </Provider>
  );
};

describe('HeaderOptions tests suite', () => {
  it('Should render TableEntriesManager component', () => {
    renderComponents();
    const tableLength = screen.getByTestId('table-length');
    expect(tableLength).toBeInTheDocument();
  });

  it('Should render GlobalFilter component', () => {
    renderComponents();
    const input = screen.getByLabelText('Search:');
    expect(input).toBeInTheDocument();
  });
});
