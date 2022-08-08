import { render, screen } from '@testing-library/react';
import TablePageManager from './index';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockedStore } from '../../../utils/testsUtils';

describe('Table page manager tests suite', () => {
  it('Should render navigation buttons', () => {
    render(
      <Provider store={mockedStore}>
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
      <Provider store={mockedStore}>
        <TablePageManager />
      </Provider>
    );
    const indicator = screen.getByTestId('page-indicator');
    expect(indicator).toBeInTheDocument();
  });

  it('Should disable navigation buttons when there is not data', () => {
    render(
      <Provider store={mockedStore}>
        <TablePageManager />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
  });

  it('Should display the right page when user click on navigation buttons', () => {
    render(
      <Provider store={mockedStore}>
        <TablePageManager />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    const indicator = screen.getByTestId('page-indicator');

    //Initial display
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
    expect(indicator.innerHTML).toBe('1');

    // Display when user have clicked on next button
    userEvent.click(nextBtn);
    expect(previousBtn.classList.contains('disabled-btn')).toBe(false);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(true);
    expect(indicator.innerHTML).toBe('2');

    // Display when user have clicked on previous button
    userEvent.click(previousBtn);
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
    expect(indicator.innerHTML).toBe('1');
  });
});
