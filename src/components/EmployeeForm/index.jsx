import { useAppDispatch } from '../../utils/hooks';
import { addEmployee } from '../../redux/employeesSlice';
import DateInput from '../DateInput';
import TextInput from '../TextInput';
import AddressFieldset from '../AddressFieldset';
import SelectDropDown from '../SelectDropDown';

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

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
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
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    dispatch(addEmployee(employee));
    modal.classList.remove('hidden');
  };

  return (
    <form action="#">
      <TextInput labelContent="First Name" />
      <TextInput labelContent="Last Name" />
      <DateInput labelContent="Date of Birth" />
      <DateInput labelContent="Start Date" />
      <AddressFieldset />
      <SelectDropDown labelContent="Department" />
      <button onClick={saveEmployee}>Save</button>
    </form>
  );
};

export default EmployeeForm;
