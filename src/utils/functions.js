const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  const day = date
    .getDate()
    .toLocaleString('en-US', { minimumIntegerDigits: 2 });

  return `${year}-${month}-${day}`;
};

const formatZipCode = (number) => {
  let zipCode = number.toString();
  if (zipCode.length < 5) {
    return '0' + zipCode;
  }

  return zipCode;
};

export const formatId = (labelContent) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return id;
};

export const formatName = (text) => {
  let tabName;
  if (text === null) {
    return;
  }
  if (text.includes('-')) {
    tabName = text.split('-');
  } else {
    tabName = text.split(' ');
  }
  let name = tabName[0].toLowerCase();
  for (let i = 1; i < tabName.length; i++) {
    name = name + tabName[i].charAt(0).toUpperCase() + tabName[i].slice(1);
  }

  return name;
};

export const formatEmployeeData = (values) => {
  values.dateOfBirth = formatDate(values.dateOfBirth);
  values.startDate = formatDate(values.startDate);
  values.zipCode = formatZipCode(values.zipCode);

  return values;
};

export const validateForm = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!/^[A-Za-z- ]+$/i.test(values.firstName)) {
    errors.firstName = 'Invalid format - Must only contain letters';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!/^[A-Za-z- ]+$/i.test(values.lastName)) {
    errors.lastName = 'Invalid format - Must only contain letters';
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  }
  if (!values.startDate) {
    errors.startDate = 'Required';
  }
  if (!values.street) {
    errors.street = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.zipCode) {
    errors.zipCode = 'Required';
  } else if (values.zipCode < 1000 || values.zipCode >= 100000) {
    errors.zipCode = 'Invalid format - Must contain five digits';
  }

  return errors;
};
