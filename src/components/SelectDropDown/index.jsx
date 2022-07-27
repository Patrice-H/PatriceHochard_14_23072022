import { statesList } from '../../data/statesList';
import { departmentsList } from '../../data/departmentsList';

const SelectDropDown = ({ labelContent }) => {
  const list = labelContent === 'State' ? statesList : departmentsList;
  const id = labelContent.toLowerCase();

  return (
    <>
      <label htmlFor={id}>{labelContent}</label>
      <select id={id}>
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectDropDown;
