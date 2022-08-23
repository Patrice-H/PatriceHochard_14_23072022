import TableEntriesManager from '../TableEntriesManager';
import GlobalFilter from '../GlobalFilter';
import './HeaderOptions.css';

/**
 * Component that returns the part of the display options on the top of the table.
 *
 * @component
 * @see {@link TableEntriesManager}
 * @see {@link GlobalFilter}
 * @param {{pageSize: number, setPageSize: function, setFilter: function, gotoPage: function}} - Props component
 * @returns {JSX} A function that returns the component
 */
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
