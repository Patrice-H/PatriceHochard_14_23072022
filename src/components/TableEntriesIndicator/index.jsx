import { useAppSelector } from '../../utils/hooks';

const TableEntriesIndicator = ({ total }) => {
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const tableLength = useAppSelector(
    (state) => state.displayOptions.tableLength
  );

  const startIndex = () => {
    if (total > 0) {
      return 1 + tableLength * (pageNumber - 1);
    }

    return 0;
  };

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
    <div id="table-entries-informations">
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
