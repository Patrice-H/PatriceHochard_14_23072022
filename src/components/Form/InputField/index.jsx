import { Field, ErrorMessage } from 'formik';
import { formatId, formatName } from '../../../utils/functions';

/**
 * Component that returns a text label, an input text or number field and an error message.
 *
 * Includes formik components.
 * @see {@link https://github.com/jaredpalmer/formik} for further information.
 * @component
 * @param {{labelContent: string, inputType: string}} - Props component
 * @returns {JSX} A function that returns the component
 */
const InputField = ({ labelContent, inputType }) => {
  return (
    <div className="form-control">
      <label htmlFor={formatId(labelContent)}>{labelContent}</label>
      <Field
        type={inputType}
        id={formatId(labelContent)}
        name={formatName(labelContent)}
      />
      <div
        id={`error-${formatId(labelContent)}`}
        data-testid={`error-${formatId(labelContent)}`}
      >
        <ErrorMessage name={formatName(labelContent)} />
      </div>
    </div>
  );
};

export default InputField;
