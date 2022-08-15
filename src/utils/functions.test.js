import { sortList, filterList, validateForm } from './functions';
import { employeesList } from '../data/dataTest';

describe('SortList function unit tests suite', () => {
  it('Should sort list by first name ascending', () => {
    const newList = sortList(employeesList, 'first-name', 'ascending');
    expect(newList[0].firstName).toBe('Betty');
    expect(newList[1].firstName).toBe('Donald');
    expect(newList[2].firstName).toBe('Mickey');
  });

  it('Should sort list by first name descending', () => {
    const newList = sortList(employeesList, 'first-name', 'descending');
    expect(newList[0].firstName).toBe('Mickey');
    expect(newList[1].firstName).toBe('Donald');
    expect(newList[2].firstName).toBe('Betty');
  });

  it('Should sort list by last name ascending', () => {
    const newList = sortList(employeesList, 'last-name', 'ascending');
    expect(newList[0].lastName).toBe('Boop');
    expect(newList[1].lastName).toBe('Duck');
    expect(newList[2].lastName).toBe('Mouse');
  });

  it('Should sort list by last name descending', () => {
    const newList = sortList(employeesList, 'last-name', 'descending');
    expect(newList[0].lastName).toBe('Mouse');
    expect(newList[1].lastName).toBe('Duck');
    expect(newList[2].lastName).toBe('Boop');
  });

  it('Should sort list by date of birth ascending', () => {
    const newList = sortList(employeesList, 'date-of-birth', 'ascending');
    expect(newList[0].dateOfBirth).toBe('1979-05-20');
    expect(newList[1].dateOfBirth).toBe('1980-06-01');
    expect(newList[2].dateOfBirth).toBe('1990-03-23');
  });

  it('Should sort list by date of birth descending', () => {
    const newList = sortList(employeesList, 'date-of-birth', 'descending');
    expect(newList[0].dateOfBirth).toBe('1990-03-23');
    expect(newList[1].dateOfBirth).toBe('1980-06-01');
    expect(newList[2].dateOfBirth).toBe('1979-05-20');
  });

  it('Should sort list by start date ascending', () => {
    const newList = sortList(employeesList, 'start-date', 'ascending');
    expect(newList[0].startDate).toBe('2014-02-17');
    expect(newList[1].startDate).toBe('2019-06-19');
    expect(newList[2].startDate).toBe('2020-10-25');
  });

  it('Should sort list by start date descending', () => {
    const newList = sortList(employeesList, 'start-date', 'descending');
    expect(newList[0].startDate).toBe('2020-10-25');
    expect(newList[1].startDate).toBe('2019-06-19');
    expect(newList[2].startDate).toBe('2014-02-17');
  });

  it('Should sort list by department ascending', () => {
    const newList = sortList(employeesList, 'department', 'ascending');
    expect(newList[0].department).toBe('Engineering');
    expect(newList[1].department).toBe('Human Resources');
    expect(newList[2].department).toBe('Legal');
  });

  it('Should sort list by department descending', () => {
    const newList = sortList(employeesList, 'department', 'descending');
    expect(newList[0].department).toBe('Legal');
    expect(newList[1].department).toBe('Human Resources');
    expect(newList[2].department).toBe('Engineering');
  });

  it('Should sort list by street ascending', () => {
    const newList = sortList(employeesList, 'street', 'ascending');
    expect(newList[0].street).toBe('1600 Amphitheatre Pky');
    expect(newList[1].street).toBe('2358 E Mount Vermon St');
    expect(newList[2].street).toBe('550 University St');
  });

  it('Should sort list by street descending', () => {
    const newList = sortList(employeesList, 'street', 'descending');
    expect(newList[0].street).toBe('550 University St');
    expect(newList[1].street).toBe('2358 E Mount Vermon St');
    expect(newList[2].street).toBe('1600 Amphitheatre Pky');
  });

  it('Should sort list by city ascending', () => {
    const newList = sortList(employeesList, 'city', 'ascending');
    expect(newList[0].city).toBe('East Lansing');
    expect(newList[1].city).toBe('Moutain View');
    expect(newList[2].city).toBe('Wichita');
  });

  it('Should sort list by city descending', () => {
    const newList = sortList(employeesList, 'city', 'descending');
    expect(newList[0].city).toBe('Wichita');
    expect(newList[1].city).toBe('Moutain View');
    expect(newList[2].city).toBe('East Lansing');
  });

  it('Should sort list by state ascending', () => {
    const newList = sortList(employeesList, 'state', 'ascending');
    expect(newList[0].state).toBe('CA');
    expect(newList[1].state).toBe('KS');
    expect(newList[2].state).toBe('MI');
  });

  it('Should sort list by state descending', () => {
    const newList = sortList(employeesList, 'state', 'descending');
    expect(newList[0].state).toBe('MI');
    expect(newList[1].state).toBe('KS');
    expect(newList[2].state).toBe('CA');
  });

  it('Should sort list by zip code ascending', () => {
    const newList = sortList(employeesList, 'zip-code', 'ascending');
    expect(newList[0].zipCode).toBe('48824');
    expect(newList[1].zipCode).toBe('66045');
    expect(newList[2].zipCode).toBe('92457');
  });

  it('Should sort list by zip code descending', () => {
    const newList = sortList(employeesList, 'zip-code', 'descending');
    expect(newList[0].zipCode).toBe('92457');
    expect(newList[1].zipCode).toBe('66045');
    expect(newList[2].zipCode).toBe('48824');
  });

  it('Should sort list by first name ascending when sort key is define by default', () => {
    const newList = sortList(employeesList, '', 'ascending');
    expect(newList[0].firstName).toBe('Betty');
    expect(newList[1].firstName).toBe('Donald');
    expect(newList[2].firstName).toBe('Mickey');
  });
});

describe('FilterList function unit tests suite', () => {
  it('Should return the entire list when filter key is null', () => {
    const newList = filterList(employeesList, null);
    expect(newList).toBe(employeesList);
  });

  it('Should return the entire list when filter Key is not found', () => {
    const newList = filterList(employeesList, 'test');
    expect(newList).toBe(employeesList);
  });

  it('Should return the filtered list including the filter key', () => {
    // Case 1: filter key is a string in lower case
    const newList1 = filterList(employeesList, 'mick');
    expect(newList1).toStrictEqual([employeesList[0]]);

    // Case 2: filter key is a string in upper case
    const newList2 = filterList(employeesList, 'Mick');
    expect(newList2).toStrictEqual([employeesList[0]]);

    //Case 3: filter key is a part of date or a number in text format
    const newList3 = filterList(employeesList, '1990');
    expect(newList3).toStrictEqual([employeesList[0]]);
  });
});

describe('ValidateForm function tests suite', () => {
  it('Should return an error for each field as required', () => {
    const values = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      zipCode: '',
    };
    const errors = validateForm(values);
    expect(errors.firstName).toBe('Required');
    expect(errors.lastName).toBe('Required');
    expect(errors.dateOfBirth).toBe('Required');
    expect(errors.startDate).toBe('Required');
    expect(errors.street).toBe('Required');
    expect(errors.city).toBe('Required');
    expect(errors.zipCode).toBe('Required');
  });

  it('Should return an error for each field as Invalid format - Must only contain letters', () => {
    const values = {
      firstName: '123',
      lastName: '456',
    };
    const errors = validateForm(values);
    expect(errors.firstName).toBe('Invalid format - Must only contain letters');
    expect(errors.lastName).toBe('Invalid format - Must only contain letters');
  });
});
