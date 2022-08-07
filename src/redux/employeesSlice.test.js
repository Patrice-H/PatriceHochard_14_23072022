import reducer, { addEmployee } from './employeesSlice';
import { employeesList } from '../data/dataTest';

describe('Employees slice tests suite', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ list: [] });
  });

  it('Should add an employee to an empty list', () => {
    const previousState = { list: [] };
    const employee = employeesList[0];
    expect(reducer(previousState, addEmployee(employee))).toEqual({
      list: [
        {
          firstName: 'Mickey',
          lastName: 'Mouse',
          dateOfBirth: '1990-03-23',
          startDate: '2019-06-19',
          department: 'Engineering',
          street: '550 University St',
          city: 'East Lansing',
          state: 'MI',
          zipCode: 48824,
        },
      ],
    });
  });

  it('Should add an employee to an existinf list', () => {
    const previousState = { list: [employeesList[0], employeesList[1]] };
    const employee = employeesList[2];
    expect(reducer(previousState, addEmployee(employee)).list.length).toEqual(
      3
    );
    expect(reducer(previousState, addEmployee(employee)).list).toEqual(
      employeesList
    );
  });
});
