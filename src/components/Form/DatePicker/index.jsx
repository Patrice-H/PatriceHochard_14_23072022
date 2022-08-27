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

  const years = new Array(101);
  for (let i = 0; i <= 100; i++) {
    years[i] = 1950 + i;
  }
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <button
                    className="previous-next-btn"
                    data-testid="previous-month"
                    onClick={(e) => {
                      decreaseMonth();
                      e.preventDefault();
                    }}
                    disabled={prevMonthButtonDisabled}
                  >
                    {'<'}
                  </button>
                  <select
                    data-testid="month-select"
                    value={months[date.getMonth()]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    data-testid="year-select"
                    value={date.getFullYear()}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button
                    className="previous-next-btn"
                    data-testid="next-month"
                    onClick={(e) => {
                      increaseMonth();
                      e.preventDefault();
                    }}
                    disabled={nextMonthButtonDisabled}
                  >
                    {'>'}
                  </button>
                </div>
              )}
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
