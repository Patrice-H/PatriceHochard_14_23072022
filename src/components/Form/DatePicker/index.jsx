import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

/**
 * Component that returns a text label, an input text field, a date picker and an error message
 *
 * Includes react-datepicker component
 * @see {@link https://github.com/Hacker0x01/react-datepicker} for further information.
 * @component
 * @param {{label: string, name: string, rest: functions}} props - Props component
 * @returns {JSX} A function that returns the component
 */
const DatePicker = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              todayButton="🏠"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default DatePicker;
