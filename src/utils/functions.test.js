import { formatEmployeeData, validateForm } from './functions';

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
      zipCode: 789,
    };
    const errors = validateForm(values);
    expect(errors.firstName).toBe('Invalid format - Must only contain letters');
    expect(errors.lastName).toBe('Invalid format - Must only contain letters');
    expect(errors.zipCode).toBe('Invalid format - Must contain five digits');
  });
});

describe('FormatEmployeeData function tests suite', () => {
  it('Should return formated data', () => {
    const date = new Date('12/31/2000');
    const RawData = {
      dateOfBirth: date,
      startDate: date,
      zipCode: 1234,
    };
    const dataFormated = formatEmployeeData(RawData);
    expect(dataFormated.dateOfBirth).toEqual('2000-12-31');
    expect(dataFormated.startDate).toEqual('2000-12-31');
    expect(dataFormated.zipCode).toEqual('01234');
  });
});
