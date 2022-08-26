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
        filteredEntries="30"
      />
    </Provider>
  );
};

describe('TablePageManage tests suite', () => {
  /* Component integrity tests */

  it('Should render previous and next navigation buttons', () => {
    renderComponents();
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('Should render three page navigation buttons', () => {
    renderComponents();
    const button1 = screen.getByTestId('page-btn-1');
    const button2 = screen.getByTestId('page-btn-2');
    const button3 = screen.getByTestId('page-btn-1');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });

  it('Should enable navigation button when there are data on next page', () => {
    renderComponents();
    const nextBtn = screen.getByText('Next');
    expect(nextBtn.classList.contains('disabled-btn')).toBe(false);
  });

  it('Should disable previous and next navigation button when there are not data', () => {
    render(
      <Provider store={store}>
        <TablePageManager
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={false}
          canNextPage={false}
          filteredEntries="0"
        />
      </Provider>
    );
    const previousBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');
    expect(previousBtn.classList.contains('disabled-btn')).toBe(true);
    expect(nextBtn.classList.contains('disabled-btn')).toBe(true);
  });

  /* Component functionalities tests (See EmployeesTable.test.js) */
});
