import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Formik, Form } from 'formik';
import SelectMenu from './index';

const renderComponents = () => {
  render(
    <Formik initialValues={{ state: 'AL', department: 'Sales' }}>
      <Form>
        <SelectMenu labelContent="State" />
        <SelectMenu labelContent="Department" />
      </Form>
    </Formik>
  );
};

describe('Select menu tests suite', () => {
  it('Should render all components', () => {
    renderComponents();
    const select1 = screen.getByLabelText('State');
    const select2 = screen.getByLabelText('Department');
    expect(select1).toBeInTheDocument();
    expect(select2).toBeInTheDocument();
  });

  it('Should return the right default values', () => {
    renderComponents();
    const select1 = screen.getByLabelText('State');
    const select2 = screen.getByLabelText('Department');
    expect(select1.value).toEqual('AL');
    expect(select2.value).toEqual('Sales');
  });

  it('Should return the right values after changing', async () => {
    renderComponents();
    const select1 = screen.getByLabelText('State');
    const select2 = screen.getByLabelText('Department');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(select1, {
        target: {
          value: 'CA',
        },
      });
      fireEvent.change(select2, {
        target: {
          value: 'Legal',
        },
      });
      expect(select1.value).toEqual('CA');
      expect(select2.value).toEqual('Legal');
    });
  });
});
