import { Field } from 'formik';
import { formatId, formatName } from '../../utils/functions';
import { statesList } from '../../data/statesList';
import { departmentsList } from '../../data/departmentsList';

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
