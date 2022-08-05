import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { setPageNumber } from '../../../redux/displayOptionsSlice';
import './TablePageManager.css';

const TablePageManager = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const listLength = useAppSelector((state) => state.employees.list).length;
  const tableLength = useAppSelector(
    (state) => state.displayOptions.tableLength
  );
  const pageMax = Math.ceil(listLength / tableLength);

  /* istanbul ignore next */
  const incrementPage = () => {
    const nextPage = pageNumber + 1;
    if (pageNumber < pageMax) {
      dispatch(setPageNumber(nextPage));
    }
  };

  /* istanbul ignore next */
  const decrementPage = () => {
    const previousPage = pageNumber - 1;
    if (pageNumber > 1) {
      dispatch(setPageNumber(previousPage));
    }
  };

  return (
    <div>
      <span
        className={pageNumber > 1 ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={decrementPage}
      >
        Previous
      </span>
      <span
        id="page-indicator"
        data-testid="page-indicator"
        className={listLength > 0 ? null : 'hidden'}
      >
        {pageNumber}
      </span>
      <span
        className={pageNumber < pageMax ? 'page-btn' : 'page-btn disabled-btn'}
        onClick={incrementPage}
      >
        Next
      </span>
    </div>
  );
};

export default TablePageManager;
