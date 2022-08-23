import { useAppSelector } from '../../../utils/hooks';

/**
 * Component that returns informations about number of entries on page.
 *
 * @component
 * @param {{total: number}} - Props component
 * @returns {JSX} A function that returns the component
 */
const TableEntriesIndicator = ({ total }) => {
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const tableLength = useAppSelector(
    (state) => state.displayOptions.tableLength
  );

  /**
   * Function that returns the index of the first entrie of the page.
   *
   * @function
   * @returns {number} Index of the first entrie
   */
  const startIndex = () => {
    if (total > 0) {
      return 1 + tableLength * (pageNumber - 1);
    }

    return 0;
  };

  /**
   * Function that returns the index of the last entrie of the page.
   *
   * @function
   * @returns {number} Index of the last entrie
   */
  const endIndex = () => {
    if (total > 0) {
      if (total > tableLength * pageNumber) {
        return tableLength * pageNumber;
      }

      return total;
    }

    return 0;
  };

  return (
    <div
      id="table-entries-informations"
      data-testid="table-entries-informations"
    >
      <span>Showing </span>
      <span data-testid="start-index">{startIndex()}</span>
      <span> to </span>
      <span data-testid="end-index">{endIndex()}</span>
      <span> of </span>
      <span data-testid="total-index">{total}</span>
      <span> entries</span>
    </div>
  );
};

export default TableEntriesIndicator;
