import TableEntriesManager from '../TableEntriesManager';
import GlobalFilter from '../GlobalFilter';
import './HeaderOptions.css';

const HeaderOptions = ({ pageSize, setPageSize, setFilter, gotoPage }) => {
  return (
    <div id="table-header-options" data-testid="table-header-options">
      <TableEntriesManager
        pageSize={pageSize}
        setPageSize={setPageSize}
        gotoPage={gotoPage}
      />
      <GlobalFilter setFilter={setFilter} gotoPage={gotoPage} />
    </div>
  );
};

export default HeaderOptions;
