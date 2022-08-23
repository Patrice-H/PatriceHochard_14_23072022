import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import {
  setSearchFilter,
  setPageNumber,
} from '../../../redux/displayOptionsSlice';
import './GlobalFilter.css';

const GlobalFilter = ({ setFilter, gotoPage }) => {
  const dispatch = useAppDispatch();
  const searchFilter = useAppSelector(
    (state) => state.displayOptions.searchFilter
  );

  const setGlobalFilter = (text) => {
    setFilter(text);
    gotoPage(0);
    dispatch(setSearchFilter(text));
    dispatch(setPageNumber(1));
  };

  return (
    <div id="table-filter" data-testid="table-filter">
      <label htmlFor="search-filter">Search:</label>
      <input
        type="text"
        id="search-filter"
        value={searchFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </div>
  );
};

export default GlobalFilter;
