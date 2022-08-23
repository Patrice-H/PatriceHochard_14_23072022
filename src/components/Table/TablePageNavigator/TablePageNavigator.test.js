import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockedStore } from '../../../utils/testsUtils';
import { store } from '../../../redux/store';
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
  /* Component integrity tests */

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

  it('Should enable navigation button when there are data on next page', () => {
    renderComponents();
    const nextBtn = screen.getByText('Next');
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
  });

  it('Should hide indicator and disable navigation buttons when there is not data', () => {
    render(
      <Provider store={store}>
        <TablePageManager
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={false}
          canNextPage={false}
        />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const indicator = screen.getByTestId('page-indicator');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(indicator.classList.contains('hidden')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(true);
  });

  /* Component functionalities tests (See EmployeesTable.test.js) */
});
