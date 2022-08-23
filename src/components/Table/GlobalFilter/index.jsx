import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import {
  setSearchFilter,
  setPageNumber,
} from '../../../redux/displayOptionsSlice';
import './GlobalFilter.css';

/**
 * Component that returns a text label, and an input text field.
 *
 * @component
 * @param {{setFilter: function, gotoPage: function}} - Props component
 * @returns {JSX} A function that returns the component
 */
const GlobalFilter = ({ setFilter, gotoPage }) => {
  const dispatch = useAppDispatch();
  const searchFilter = useAppSelector(
    (state) => state.displayOptions.searchFilter
  );

  /**
   * Function that defines the search filter.
   *
   * @function
   * @param {string} text - Searched text
   */
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
