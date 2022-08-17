import { render, screen, fireEvent } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { act } from 'react-dom/test-utils';
import InputField from './index';

const renderComponents = () => {
  render(
    <Formik initialValues={{ textInput: '', numberInput: '' }}>
      <Form>
        <InputField labelContent="text input" inputType="text" />
        <InputField labelContent="number input" inputType="number" />
      </Form>
    </Formik>
  );
};

describe('Input filed tests suite', () => {
  it('Should render all inputs', () => {
    renderComponents();
    const inputText = screen.getByLabelText('text input');
    const inputNumber = screen.getByLabelText('number input');
    expect(inputText).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
  });

  it('Should render all labels', () => {
    renderComponents();
    const labelText = screen.getByText('text input');
    const labelNumber = screen.getByText('number input');
    expect(labelText).toBeInTheDocument();
    expect(labelNumber).toBeInTheDocument();
  });

  it('Should return the default input values', () => {
    renderComponents();
    const inputText = screen.getByLabelText('text input');
    const inputNumber = screen.getByLabelText('number input');
    expect(inputText.value).toEqual('');
    expect(inputNumber.value).toEqual('');
  });

  it('Should return the rigth input values after changing', async () => {
    renderComponents();
    const inputText = screen.getByLabelText('text input');
    const inputNumber = screen.getByLabelText('number input');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(inputText, {
        target: {
          value: 'test',
        },
      });
      fireEvent.change(inputNumber, {
        target: {
          value: 8888,
        },
      });
    });
    expect(inputText.value).toEqual('test');
    expect(inputNumber.value).toEqual('8888');
  });

  it('Should not change the input number value by bad value', async () => {
    renderComponents();
    const inputNumber = screen.getByLabelText('number input');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(inputNumber, {
        target: {
          value: 'test',
        },
      });
    });
    expect(inputNumber.value).toEqual('');
  });
});
