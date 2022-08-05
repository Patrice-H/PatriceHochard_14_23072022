import { useAppDispatch } from '../../utils/hooks';
import { addEmployee } from '../../redux/employeesSlice';
import InputBlock from '../form-components/InputBlock';
import AddressFieldset from '../form-components/AddressFieldset';
import SelectDropDown from '../form-components/SelectDropDown';

const EmployeeForm = () => {
  const dispatch = useAppDispatch();

  const saveEmployee = (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');
    const modal = document.getElementById('modal');

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };

    dispatch(addEmployee(employee));
    modal.classList.remove('hidden');
  };

  return (
    <form action="#">
      <InputBlock labelContent="First Name" elementType="text" />
      <InputBlock labelContent="Last Name" elementType="text" />
      <InputBlock labelContent="Date of Birth" elementType="date" />
      <InputBlock labelContent="Start Date" elementType="date" />
      <AddressFieldset />
      <SelectDropDown labelContent="Department" />
      <button onClick={saveEmployee}>Save</button>
    </form>
  );
};

export default EmployeeForm;
