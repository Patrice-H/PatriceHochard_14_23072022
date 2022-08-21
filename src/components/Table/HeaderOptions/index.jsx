import TableEntriesManager from '../TableEntriesManager';
import GlobalFilter from '../GlobalFilter';
import './HeaderOptions.css';

const HeaderOptions = ({ pageSize, setPageSize, setFilter }) => {
  return (
    <div id="table-header-options" data-testid="table-header-options">
      <TableEntriesManager pageSize={pageSize} setPageSize={setPageSize} />
      <GlobalFilter setFilter={setFilter} />
    </div>
  );
};

export default HeaderOptions;
