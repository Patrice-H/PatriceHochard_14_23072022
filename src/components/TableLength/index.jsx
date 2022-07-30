import './TableLength.css';

const TableLength = () => {
  const options = [10, 25, 50, 100];

  return (
    <div id="table-length" data-testid="table-length">
      <label>
        Show
        <select data-testid="select-table-length">
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
