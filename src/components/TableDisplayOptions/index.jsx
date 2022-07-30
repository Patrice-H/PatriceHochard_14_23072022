import TableFilter from '../TableFilter';
import TableLength from '../TableLength';
import './TableDisplayOptions.css';

const TableDisplayOptions = () => {
  return (
    <div id="table-display-options" data-testid="table-display-options">
      <TableLength />
      <TableFilter />
    </div>
  );
};

export default TableDisplayOptions;
