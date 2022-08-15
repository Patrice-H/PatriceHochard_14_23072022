import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from '../DatePicker';
import { useAppDispatch } from '../../utils/hooks';
import { addEmployee } from '../../redux/employeesSlice';
import { formatDate } from '../../utils/functions';
import { statesList } from '../../data/statesList';
import { departmentsList } from '../../data/departmentsList';
import './EmployeesForm.css';

const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: 'Alabama',
  zipCode: '',
  department: 'Sales',
};

const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!/^[A-Za-z- ]+$/i.test(values.firstName)) {
    errors.firstName = 'Invalid format - Must only contain letters';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  }
  if (!values.startDate) {
    errors.startDate = 'Required';
  }
  if (!values.street) {
    errors.street = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.zipCode) {
    errors.zipCode = 'Required';
  }

  return errors;
};

const EmployeesForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values) => {
    const modal = document.getElementById('modal');
    values.dateOfBirth = formatDate(values.dateOfBirth);
    values.startDate = formatDate(values.startDate);
    console.log('Form values : ', values);
    dispatch(addEmployee(values));
    modal.classList.remove('hidden');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form id="form">
        <div className="form-control">
          <label htmlFor="first-name">First Name</label>
          <Field type="text" id="first-name" name="firstName" />
          <ErrorMessage name="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <Field type="text" id="last-name" name="lastName" />
          <ErrorMessage name="lastName" />
        </div>
        <DatePicker label="Date of Birth" name="dateOfBirth" />
        <DatePicker label="Start Date" name="startDate" />
        <fieldset>
          <legend>Address</legend>
          <div className="form-control">
            <label htmlFor="street">Street</label>
            <Field type="text" id="street" name="street" />
            <ErrorMessage name="street" />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" />
          </div>
          <div className="form-control">
            <label htmlFor="state">State</label>
            <Field name="state" as="select">
              {statesList.map((state) => (
                <option key={state.label}>{state.label}</option>
              ))}
            </Field>
          </div>
          <div className="form-control">
            <label htmlFor="zip-code">Zip Code</label>
            <Field type="number" id="zip-code" name="zipCode" />
            <ErrorMessage name="zipCode" />
          </div>
        </fieldset>
        <div className="form-control">
          <label htmlFor="department">Department</label>
          <Field name="department" as="select" id="department">
            {departmentsList.map((department) => (
              <option key={department.label}>{department.label}</option>
            ))}
          </Field>
        </div>
        <div id="submit-btn">
          <button type="submit">Save</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EmployeesForm;
