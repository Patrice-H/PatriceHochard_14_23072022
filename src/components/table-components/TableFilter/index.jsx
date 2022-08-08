import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { setSearchFilter } from '../../../redux/displayOptionsSlice';
import './TableFilter.css';

const TableFilter = () => {
  const dispatch = useAppDispatch();
  const searchedText = useAppSelector(
    (state) => state.displayOptions.searchFilter
  );

  const searchText = () => {
    const text = document.getElementById('search-filter').value;
    if (text.length >= 3) {
      dispatch(setSearchFilter(text));
    }
    if (text.length < 3 && searchedText !== null) {
      dispatch(setSearchFilter(null));
    }
  };

  return (
    <div id="table-filter" data-testid="table-filter">
      <label htmlFor="search-filter">Search:</label>
      <input type="text" id="search-filter" onChange={searchText} />
    </div>
  );
};

export default TableFilter;
