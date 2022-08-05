import { render, screen } from '@testing-library/react';
import TablePageManager from './index';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Table page manager tests suite', () => {
  it('Should render navigation buttons', () => {
    render(
      <Provider store={store}>
        <TablePageManager />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('Should render indicator of page', () => {
    render(
      <Provider store={store}>
        <TablePageManager />
      </Provider>
    );
    const indicator = screen.getByTestId('page-indicator');
    expect(indicator).toBeInTheDocument();
  });

  it('Should disable navigation buttons when there is not data', () => {
    render(
      <Provider store={store}>
        <TablePageManager />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(true);
  });
});
