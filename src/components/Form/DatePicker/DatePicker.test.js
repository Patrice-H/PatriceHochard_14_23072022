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
  /* Component integrity tests */

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

  it('Should render the current month and year in date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');
    const date = new Date();
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const monthSelect = screen.getByTestId('month-select');
    const yearSelect = screen.getByTestId('year-select');
    expect(monthSelect.value).toEqual(month);
    expect(yearSelect.value).toEqual(year.toString());
  });

  it('Should render navigation buttons in date picker', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const previousBtn = screen.getByTestId('previous-month');
    const nextBtn = screen.getByTestId('next-month');
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

  /* Component functionalities tests */

  it('Should display previous and next month', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');
    const actualDate = new Date();

    const nextDate = new Date(
      `${actualDate.getFullYear()}, ${
        actualDate.getMonth() + 2
      }, ${actualDate.getDate()}`
    );
    const actualMonth = actualDate.toLocaleString('en-GB', { month: 'long' });
    const nextMonth = nextDate.toLocaleString('en-GB', { month: 'long' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const previousBtn = screen.getByTestId('previous-month');
    const nextBtn = screen.getByTestId('next-month');
    const monthSelect = screen.getByTestId('month-select');

    // test after click on next month button
    fireEvent.click(nextBtn);
    expect(monthSelect.value).toEqual(nextMonth);

    // test after click on previous month button
    fireEvent.click(previousBtn);
    expect(monthSelect.value).toEqual(actualMonth);
  });

  it('Should display rigth month and rigth year after select changing', async () => {
    renderComponents();
    const inputBirth = screen.getByLabelText('Date of Birth');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(inputBirth);
    });
    const monthSelect = screen.getByTestId('month-select');
    const yearSelect = screen.getByTestId('year-select');

    fireEvent.change(monthSelect, {
      target: {
        value: 'June',
      },
    });
    fireEvent.change(yearSelect, {
      target: {
        value: '2000',
      },
    });
    expect(monthSelect.value).toEqual('June');
    expect(yearSelect.value).toEqual('2000');
  });
});
