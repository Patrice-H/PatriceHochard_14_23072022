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
  gotoPage,
  filteredEntries,
}) => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const employeesList = useAppSelector((state) => state.employees.list);
  const tableLength = useAppSelector(
    (state) => state.displayOptions.tableLength
  );

  const pageButtons = new Array(Math.ceil(filteredEntries / tableLength));
  for (let i = 0; i < pageButtons.length; i++) {
    pageButtons[i] = i + 1;
  }

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

  const displayPage = (page) => {
    gotoPage(page - 1);
    dispatch(setPageNumber(page));
  };

  return (
    <div data-testid="table-page-navigator">
      <span
        className={canPreviousPage ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={() => decrementPage()}
      >
        Previous
      </span>
      {employeesList.length > 0
        ? pageButtons.map((pageButton) => (
            <span
              key={pageButton}
              className={
                pageNumber === pageButton ? 'page-btn active' : 'page-btn'
              }
              data-testid={`page-btn-${pageButton}`}
              onClick={() => displayPage(pageButton)}
            >
              {pageButton}
            </span>
          ))
        : null}
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
