import { Field } from 'formik';
import { formatId, formatName } from '../../../utils/functions';
import { statesList } from '../../../data/statesList';
import { departmentsList } from '../../../data/departmentsList';

/**
 * Component that returns a text label, an select drop down and an error message.
 *
 * Includes formik component.
 * @see {@link https://github.com/jaredpalmer/formik} for further information.
 * @component
 * @param {{labelContent: string}} - Props component
 * @returns {JSX} A function that returns the component
 */
const SelectMenu = ({ labelContent }) => {
  const list = labelContent === 'State' ? statesList : departmentsList;

  return (
    <div className="form-control">
      <label htmlFor={formatId(labelContent)}>{labelContent}</label>
      <Field
        name={formatName(labelContent)}
        as="select"
        id={formatId(labelContent)}
      >
        {list.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectMenu;
