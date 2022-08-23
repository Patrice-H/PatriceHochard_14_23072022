import TableEntriesIndicator from '../TableEntriesIndicator';
import TablePageNavigator from '../TablePageNavigator';
import './FooterOptions.css';

/**
 * Component that returns the part of the display options on the bottom of the table.
 *
 * @component
 * @see {@link TableEntriesIndicator}
 * @see {@link TablePageNavigator}
 * @param {{total: number, previousPage: function, nextPage: function, canPreviousPage: boolean, canNextPage: boolean}} - Props component
 * @returns {JSX} A function that returns the component
 */
const FooterOptions = ({
  total,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}) => {
  return (
    <div id="table-footer-options" data-testid="table-footer-options">
      <TableEntriesIndicator total={total} />
      <TablePageNavigator
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};

export default FooterOptions;
