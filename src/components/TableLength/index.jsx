import { useAppDispatch } from '../../utils/hooks';
import { setTableLength } from '../../redux/displayOptionsSlice';
import './TableLength.css';

const TableLength = () => {
  const options = [10, 25, 50, 100];
  const dispatch = useAppDispatch();

  const defineTableLength = () => {
    const selectValue = document.getElementById('select-table-length').value;
    dispatch(setTableLength(selectValue));
  };

  return (
    <div id="table-length" data-testid="table-length">
      <label>
        Show
        <select
          id="select-table-length"
          data-testid="select-table-length"
          onChange={defineTableLength}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        entries
      </label>
    </div>
  );
};

export default TableLength;
