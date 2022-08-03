import { useAppSelector } from '../../utils/hooks';
import './TableEntriesInformations.css';

const TableEntriesInformations = () => {
  const totalLength = useAppSelector((state) => state.employees.list).length;
  const tableLength = useAppSelector(
    (state) => state.displayOptions.tableLength
  );
  const pageNumber = 1;

  const getStartIndex = () => {
    if (totalLength === 0) {
      return 0;
    }

    return 1 + tableLength * (pageNumber - 1);
  };

  const getEndIndex = () => {
    const endIndex = tableLength * pageNumber;
    if (endIndex > totalLength) {
      return totalLength;
    }

    return endIndex;
  };

  return (
    <div id="table-entries-informations">
      <span>Showing </span>
      <span>{getStartIndex()}</span>
      <span> to </span>
      <span>{getEndIndex()}</span>
      <span> of </span>
      <span>{totalLength}</span>
      <span> entries</span>
    </div>
  );
};

export default TableEntriesInformations;
