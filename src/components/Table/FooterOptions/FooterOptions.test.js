import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import FooterOptions from './index';

const renderComponents = () => {
  render(
    <Provider store={store}>
      <FooterOptions />
    </Provider>
  );
};

describe('FooterOptions tests suite', () => {
  it('Should render TableEntriesIndicator component', () => {
    renderComponents();
    const entriesIndicator = screen.getByTestId('table-entries-informations');
    expect(entriesIndicator).toBeInTheDocument();
  });

  it('Should render TablePageNavigator component', () => {
    renderComponents();
    const pageNavigator = screen.getByTestId('table-page-navigator');
    expect(pageNavigator).toBeInTheDocument();
  });
});
