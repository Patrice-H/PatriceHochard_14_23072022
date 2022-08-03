import { sortedList } from './sortedList';

const employeesList = [
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
  {
    firstName: 'Betty',
    lastName: 'Boop',
    dateOfBirth: '1980-06-01',
    startDate: '2020-10-25',
    department: 'Human Resources',
    street: '1600 Amphitheatre Pky',
    city: 'Moutain View',
    state: 'CA',
    zipCode: 92457,
  },
  {
    firstName: 'Donald',
    lastName: 'Duck',
    dateOfBirth: '1979-05-20',
    startDate: '2014-02-17',
    department: 'Legal',
    street: '2358 E Mount Vermon St',
    city: 'Wichita',
    state: 'KS',
    zipCode: 66045,
  },
];

describe('Sorted list unit tests suite', () => {
  it('Should sort list by first name ascending', () => {
    const newList = sortedList(employeesList, 'first-name', 'ascending');
    expect(newList[0].firstName).toBe('Betty');
    expect(newList[1].firstName).toBe('Donald');
    expect(newList[2].firstName).toBe('Mickey');
  });

  it('Should sort list by first name descending', () => {
    const newList = sortedList(employeesList, 'first-name', 'descending');
    expect(newList[0].firstName).toBe('Mickey');
    expect(newList[1].firstName).toBe('Donald');
    expect(newList[2].firstName).toBe('Betty');
  });

  it('Should sort list by last name ascending', () => {
    const newList = sortedList(employeesList, 'last-name', 'ascending');
    expect(newList[0].lastName).toBe('Boop');
    expect(newList[1].lastName).toBe('Duck');
    expect(newList[2].lastName).toBe('Mouse');
  });

  it('Should sort list by last name descending', () => {
    const newList = sortedList(employeesList, 'last-name', 'descending');
    expect(newList[0].lastName).toBe('Mouse');
    expect(newList[1].lastName).toBe('Duck');
    expect(newList[2].lastName).toBe('Boop');
  });

  it('Should sort list by date of birth ascending', () => {
    const newList = sortedList(employeesList, 'date-of-birth', 'ascending');
    expect(newList[0].dateOfBirth).toBe('1979-05-20');
    expect(newList[1].dateOfBirth).toBe('1980-06-01');
    expect(newList[2].dateOfBirth).toBe('1990-03-23');
  });

  it('Should sort list by date of birth descending', () => {
    const newList = sortedList(employeesList, 'date-of-birth', 'descending');
    expect(newList[0].dateOfBirth).toBe('1990-03-23');
    expect(newList[1].dateOfBirth).toBe('1980-06-01');
    expect(newList[2].dateOfBirth).toBe('1979-05-20');
  });

  it('Should sort list by start date ascending', () => {
    const newList = sortedList(employeesList, 'start-date', 'ascending');
    expect(newList[0].startDate).toBe('2014-02-17');
    expect(newList[1].startDate).toBe('2019-06-19');
    expect(newList[2].startDate).toBe('2020-10-25');
  });

  it('Should sort list by start date descending', () => {
    const newList = sortedList(employeesList, 'start-date', 'descending');
    expect(newList[0].startDate).toBe('2020-10-25');
    expect(newList[1].startDate).toBe('2019-06-19');
    expect(newList[2].startDate).toBe('2014-02-17');
  });

  it('Should sort list by department ascending', () => {
    const newList = sortedList(employeesList, 'department', 'ascending');
    expect(newList[0].department).toBe('Engineering');
    expect(newList[1].department).toBe('Human Resources');
    expect(newList[2].department).toBe('Legal');
  });

  it('Should sort list by department descending', () => {
    const newList = sortedList(employeesList, 'department', 'descending');
    expect(newList[0].department).toBe('Legal');
    expect(newList[1].department).toBe('Human Resources');
    expect(newList[2].department).toBe('Engineering');
  });

  it('Should sort list by street ascending', () => {
    const newList = sortedList(employeesList, 'street', 'ascending');
    expect(newList[0].street).toBe('1600 Amphitheatre Pky');
    expect(newList[1].street).toBe('2358 E Mount Vermon St');
    expect(newList[2].street).toBe('550 University St');
  });

  it('Should sort list by street descending', () => {
    const newList = sortedList(employeesList, 'street', 'descending');
    expect(newList[0].street).toBe('550 University St');
    expect(newList[1].street).toBe('2358 E Mount Vermon St');
    expect(newList[2].street).toBe('1600 Amphitheatre Pky');
  });

  it('Should sort list by city ascending', () => {
    const newList = sortedList(employeesList, 'city', 'ascending');
    expect(newList[0].city).toBe('East Lansing');
    expect(newList[1].city).toBe('Moutain View');
    expect(newList[2].city).toBe('Wichita');
  });

  it('Should sort list by city descending', () => {
    const newList = sortedList(employeesList, 'city', 'descending');
    expect(newList[0].city).toBe('Wichita');
    expect(newList[1].city).toBe('Moutain View');
    expect(newList[2].city).toBe('East Lansing');
  });

  it('Should sort list by state ascending', () => {
    const newList = sortedList(employeesList, 'state', 'ascending');
    expect(newList[0].state).toBe('CA');
    expect(newList[1].state).toBe('KS');
    expect(newList[2].state).toBe('MI');
  });

  it('Should sort list by state descending', () => {
    const newList = sortedList(employeesList, 'state', 'descending');
    expect(newList[0].state).toBe('MI');
    expect(newList[1].state).toBe('KS');
    expect(newList[2].state).toBe('CA');
  });

  it('Should sort list by zip code ascending', () => {
    const newList = sortedList(employeesList, 'zip-code', 'ascending');
    expect(newList[0].zipCode).toBe(48824);
    expect(newList[1].zipCode).toBe(66045);
    expect(newList[2].zipCode).toBe(92457);
  });

  it('Should sort list by zip code descending', () => {
    const newList = sortedList(employeesList, 'zip-code', 'descending');
    expect(newList[0].zipCode).toBe(92457);
    expect(newList[1].zipCode).toBe(66045);
    expect(newList[2].zipCode).toBe(48824);
  });
});