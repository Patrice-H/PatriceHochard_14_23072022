import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { setSortBy, setOrderBy } from '../../redux/displayOptionsSlice';
import { COLUMNS } from '../../data/table-columns';
import { formatId } from '../../utils/functions';
//import { applyUserOptions } from '../../utils/functions';
import sortBtn from '../../assets/sort-btn.png';
import sortAscBtn from '../../assets/sort-asc-btn.png';
import sortDescBtn from '../../assets/sort-desc-btn.png';
import './EmployeesTable.css';

const EmployeesTable = () => {
  const dispatch = useAppDispatch();
  const employeesList = useAppSelector((state) => state.employees.list);
  /*
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  // prettier-ignore
  const filtredBy = useAppSelector((state) => state.displayOptions.searchFilter);

  const displayedList = applyUserOptions(
    employeesList,
    filtredBy,
    sortedBy,
    orderedBy
  );
    */
  const columns = useMemo(() => COLUMNS, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => employeesList, []);
  //const data = useMemo(() => displayedList, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const updateDisplayOptions = (column) => {
    let sort, order;
    if (!column.isSorted && column.isSortedDesc === undefined) {
      sort = formatId(column.Header);
      order = 'ascending';
    }
    if (column.isSorted && !column.isSortedDesc) {
      sort = formatId(column.Header);
      order = 'descending';
    }
    if (column.isSorted && column.isSortedDesc) {
      sort = null;
      order = null;
    }
    console.log('sort ' + sort + ' order ' + order);
    dispatch(setSortBy(sort));
    dispatch(setOrderBy(order));
  };

  return (
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
        {employeesList.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={9} id="no-data">
                No data available in table
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default EmployeesTable;
