import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Formik, Form } from 'formik';
import DatePicker from './index';

const renderComponents = () => {
  render(
    <Formik>
      <Form>
        <DatePicker label="Date of Birth" name="dateOfBirth" />
        <DatePicker label="Start Date" name="startDate" />
      </Form>
    </Formik>
  );
};

describe('Date picker tests suite', () => {
  it('Should render all coponents', () => {
    renderComponents();
    const labelBirth = screen.getByText('Date of Birth');
    const inputBirth = screen.getByLabelText('Date of Birth');
    const labelStart = screen.getByText('Date of Birth');
    const inputStart = screen.getByLabelText('Date of Birth');
    expect(labelBirth).toBeInTheDocument();
    expect(inputBirth).toBeInTheDocument();
    expect(labelStart).toBeInTheDocument();
    expect(inputStart).toBeInTheDocument();
  });

  it('Should render date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');

    // test before click on elements
    expect(
      inputBirth.classList.contains('react-datepicker-ignore-onclickoutside')
    ).toEqual(false);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });

    // test after click on elements
    expect(
      inputBirth.classList.contains('react-datepicker-ignore-onclickoutside')
    ).toEqual(true);
  });

  it('Should render the current month in date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');
    const date = new Date();
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const currentMonth = screen.getByText(`${month} ${year}`);
    expect(currentMonth).toBeInTheDocument();
  });

  it('Should render navigation buttons in date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const previousBtn = screen.getByText('Previous Month');
    const nextBtn = screen.getByText('Next Month');
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('Should render the today button in date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const todayBtn = screen.getByText('🏠');
    expect(todayBtn).toBeInTheDocument();
  });
});
