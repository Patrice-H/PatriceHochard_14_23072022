import { Field, ErrorMessage } from 'formik';
import { formatId, formatName } from '../../../utils/functions';

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
