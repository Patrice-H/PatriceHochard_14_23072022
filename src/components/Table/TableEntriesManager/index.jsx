import { useAppDispatch } from '../../../utils/hooks';
import {
  setTableLength,
  setPageNumber,
} from '../../../redux/displayOptionsSlice';
import './TableEntriesManager.css';

// Select drop down options
const options = [
  { number: 10 },
  { number: 25 },
  { number: 50 },
  { number: 100 },
];

/**
 * Component that returns a text label, and a select drop down.
 *
 * @component
 * @param {{pageSize: number, setPageSize: function, gotoPage: function}} - Props component
 * @returns {JSX} A function that returns the component
 */
const TableEntriesManager = ({ pageSize, setPageSize, gotoPage }) => {
  const dispatch = useAppDispatch();

  /**
   * Function that defines the number of table entries.
   *
   * @function
   * @param {number} value - Number of table entries
   */
  const defineTableLength = (value) => {
    setPageSize(value);
    gotoPage(0);
    dispatch(setTableLength(value));
    dispatch(setPageNumber(1));
  };

  return (
    <div id="table-length" data-testid="table-length">
      <label>
        Show
        <select
          id="select-table-length"
          data-testid="select-table-length"
          value={pageSize}
          onChange={(e) => defineTableLength(Number(e.target.value))}
        >
          {options.map((option) => (
            <option key={option.number} value={option.number}>
              {option.number}
            </option>
          ))}
        </select>
        entries
      </label>
    </div>
  );
};

export default TableEntriesManager;
