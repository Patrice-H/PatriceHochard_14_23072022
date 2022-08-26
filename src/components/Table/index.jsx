import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { setSortBy, setOrderBy } from '../../redux/displayOptionsSlice';
import { COLUMNS } from '../../data/table-columns';
import { formatId, formatName } from '../../utils/functions';
import sortBtn from '../../assets/sort-btn.png';
import sortAscBtn from '../../assets/sort-asc-btn.png';
import sortDescBtn from '../../assets/sort-desc-btn.png';
import HeaderOptions from './HeaderOptions';
import FooterOptions from './FooterOptions';
import './EmployeesTable.css';

/**
 * Component that returns the employees table.
 *
 * Includes react-table components.
 * @see {@link https://github.com/TanStack/table} for further information.
 * @see {@link HeaderOptions}
 * @see {@link FooterOptions}
 * @component
 * @returns {JSX} A function that returns the component
 */
const EmployeesTable = () => {
  const dispatch = useAppDispatch();
  const employeesList = useAppSelector((state) => state.employees.list);
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const entries = useAppSelector((state) => state.displayOptions.tableLength);
  // prettier-ignore
  const filtredBy = useAppSelector((state) => state.displayOptions.searchFilter);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employeesList, [employeesList]);
  const tableFilter = useMemo(() => filtredBy, [filtredBy]);

  // Defines sortBy property
  const sortBy =
    sortedBy === null
      ? []
      : [{ id: formatName(sortedBy), desc: orderedBy === 'descending' }];

  // Defines initial state of table
  const initialState = {
    sortBy,
    globalFilter: tableFilter,
    pageIndex: pageNumber - 1,
    pageSize: entries,
  };

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    page,
    previousPage,
    nextPage,
    gotoPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    setGlobalFilter,
    state,
  } = useTable(
    {
      initialState,
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageSize } = state;

  /**
   * Function that update sort and order of the table.
   *
   * @function
   */
  const updateDisplayOptions = (column) => {
    if (!column.isSorted && column.isSortedDesc === undefined) {
      dispatch(setSortBy(formatId(column.Header)));
      if (orderedBy !== 'ascending') {
        dispatch(setOrderBy('ascending'));
      }
    }
    if (column.isSorted && !column.isSortedDesc) {
      dispatch(setOrderBy('descending'));
    }
    if (column.isSorted && column.isSortedDesc) {
      dispatch(setSortBy(null));
      dispatch(setOrderBy(null));
    }
  };

  return (
    <>
      <HeaderOptions
        pageSize={pageSize}
        setPageSize={setPageSize}
        setFilter={setGlobalFilter}
        gotoPage={gotoPage}
      />
      <div id="employees-table" data-testid="employees-table">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div
                      className="th"
                      data-testid={column.id}
                      onClick={() => {
                        updateDisplayOptions(column);
                      }}
                    >
                      <span className="header-column">
                        {column.render('Header')}
                      </span>
                      <span className="sort-icon">
                        <img
                          src={
                            column.isSorted
                              ? column.isSortedDesc
                                ? sortDescBtn
                                : sortAscBtn
                              : sortBtn
                          }
                          alt="Sort Button"
                        />
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={
                            formatId(cell.column.Header) === sortedBy
                              ? 'sorted-column'
                              : null
                          }
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9} id="no-data">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <FooterOptions
        total={rows.length}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        filteredEntries={rows.length}
      />
    </>
  );
};

export default EmployeesTable;
