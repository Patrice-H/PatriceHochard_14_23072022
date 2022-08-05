import InputBlock from '../../form-components/InputBlock';
import './TableFilter.css';

const TableFilter = () => {
  return (
    <div id="table-filter" data-testid="table-filter">
      <InputBlock labelContent="Search:" elementType="text" />
    </div>
  );
};

export default TableFilter;
