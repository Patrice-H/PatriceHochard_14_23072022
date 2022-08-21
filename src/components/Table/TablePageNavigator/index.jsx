import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { setPageNumber } from '../../../redux/displayOptionsSlice';
import './TablePageNavigator.css';

const TablePageNavigator = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}) => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);

  const incrementPage = () => {
    if (canNextPage) {
      nextPage();
      dispatch(setPageNumber(pageNumber + 1));
    }
  };

  const decrementPage = () => {
    if (canPreviousPage) {
      previousPage();
      dispatch(setPageNumber(pageNumber - 1));
    }
  };

  return (
    <div>
      <span
        className={canPreviousPage ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={() => decrementPage()}
      >
        Previous
      </span>
      <span id="page-indicator" data-testid="page-indicator">
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
