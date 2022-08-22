import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockedStore } from '../../../utils/testsUtils';
import TablePageManager from './index';

const previousPage = jest.fn();
const nextPage = jest.fn();

const renderComponents = () => {
  render(
    <Provider store={mockedStore}>
      <TablePageManager
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={false}
        canNextPage={true}
      />
    </Provider>
  );
};

describe('TablePageManage tests suite', () => {
  it('Should render navigation buttons', () => {
    renderComponents();
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('Should render indicator of page', () => {
    renderComponents();
    const indicator = screen.getByTestId('page-indicator');
    expect(indicator).toBeInTheDocument();
  });

  it('Should disable navigation buttons when there is not data', () => {
    renderComponents();
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
  });

  it('Should display the right page when user click on navigation buttons', () => {
    renderComponents();
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    const indicator = screen.getByTestId('page-indicator');

    //Initial display
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
    expect(indicator.innerHTML).toBe('1');

    // Display when user have clicked on next button
    userEvent.click(nextBtn);
    expect(indicator.innerHTML).toBe('2');
  });
});
