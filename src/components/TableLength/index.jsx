import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setTableLength, setPageNumber } from '../../redux/displayOptionsSlice';
import './TableLength.css';

const TableLength = () => {
  const options = [
    { number: 10 },
    { number: 25 },
    { number: 50 },
    { number: 100 },
  ];
  const entries = useAppSelector((state) => state.displayOptions.tableLength);
  const dispatch = useAppDispatch();

  const defineTableLength = () => {
    const selectValue = document.getElementById('select-table-length').value;
    dispatch(setTableLength(selectValue));
    dispatch(setPageNumber(1));
  };

  return (
    <div id="table-length" data-testid="table-length">
      <label>
        Show
        <select
          id="select-table-length"
          data-testid="select-table-length"
          value={entries}
          onChange={defineTableLength}
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

export default TableLength;
