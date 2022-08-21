import { Formik, Form } from 'formik';
import InputField from './InputField';
import DatePicker from './DatePicker';
import SelectMenu from './SelectMenu';
import { useAppDispatch } from '../../utils/hooks';
import { addEmployee } from '../../redux/employeesSlice';
import { formatEmployeeData, validateForm } from '../../utils/functions';
import './EmployeesForm.css';

const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: 'AL',
  zipCode: '',
  department: 'Sales',
};

const EmployeesForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values) => {
    const modal = document.getElementById('modal');
    values = formatEmployeeData(values);
    dispatch(addEmployee(values));
    modal.classList.remove('hidden');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validateForm}
    >
      <Form id="form" data-testid="form">
        <InputField labelContent="First Name" inputType="text" />
        <InputField labelContent="Last Name" inputType="text" />
        <DatePicker label="Date of Birth" name="dateOfBirth" />
        <DatePicker label="Start Date" name="startDate" />
        <fieldset>
          <legend>Address</legend>
          <InputField labelContent="Street" inputType="text" />
          <InputField labelContent="City" inputType="text" />
          <SelectMenu labelContent="State" />
          <InputField labelContent="Zip Code" inputType="number" />
        </fieldset>
        <SelectMenu labelContent="Department" />
        <div id="submit-btn">
          <button type="submit">Save</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EmployeesForm;
