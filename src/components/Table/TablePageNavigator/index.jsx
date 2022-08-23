import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { setPageNumber } from '../../../redux/displayOptionsSlice';
import './TablePageNavigator.css';

/**
 * Component that allows navigation between table pages.
 *
 * @component
 * @param {{previousPage: function, nextPage: function, canPreviousPage: boolean, canNextPage: boolean}} - Props component
 * @returns {JSX} A function that returns the component
 */
const TablePageNavigator = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}) => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const employeesList = useAppSelector((state) => state.employees.list);

  /**
   * Function that allows navigation to next page.
   *
   * @function
   */
  const incrementPage = () => {
    if (canNextPage) {
      nextPage();
      dispatch(setPageNumber(pageNumber + 1));
    }
  };

  /**
   * Function that allows navigation to previous page.
   *
   * @function
   */
  const decrementPage = () => {
    if (canPreviousPage) {
      previousPage();
      dispatch(setPageNumber(pageNumber - 1));
    }
  };

  return (
    <div data-testid="table-page-navigator">
      <span
        className={canPreviousPage ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={() => decrementPage()}
      >
        Previous
      </span>
      <span
        id="page-indicator"
        data-testid="page-indicator"
        className={employeesList.length > 0 ? null : 'hidden'}
      >
        {pageNumber}
      </span>
      <span
        className={canNextPage ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={() => incrementPage()}
      >
        Next
      </span>
    </div>
  );
};

export default TablePageNavigator;
