import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { setPageNumber } from '../../../redux/displayOptionsSlice';
import { applyUserOptions } from '../../../utils/functions';
import './TablePageManager.css';

const TablePageManager = () => {
  const dispatch = useAppDispatch();
  const employeesList = useAppSelector((state) => state.employees.list);
  // prettier-ignore
  const tableLength = useAppSelector((state) => state.displayOptions.tableLength);
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  // prettier-ignore
  const filtredBy = useAppSelector((state) => state.displayOptions.searchFilter);

  const displayedList = applyUserOptions(
    employeesList,
    filtredBy,
    sortedBy,
    orderedBy
  );

  const listLength = displayedList.length;
  const pageMax = Math.ceil(listLength / tableLength);

  const incrementPage = () => {
    const nextPage = pageNumber + 1;
    if (pageNumber < pageMax) {
      dispatch(setPageNumber(nextPage));
    }
  };

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
