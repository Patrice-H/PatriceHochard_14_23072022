/**
 * Function that returns a US date into string with the format (yyyy-mm-dd).
 *
 * @function
 * @param {date} date
 * @returns {string} The formated date
 */
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

/**
 * Function that returns a US zip code into string and add 0 at first if its number of digits < 5.
 *
 * @function
 * @param {number} number
 * @returns {string} The formated zip code
 */
const formatZipCode = (number) => {
  let zipCode = number.toString();
  if (zipCode.length < 5) {
    return '0' + zipCode;
  }

  return zipCode;
};

/**
 * Function that returns a formated id from a label text.
 *
 * @function
 * @param {string} labelContent
 * @returns {string} The formated id
 */
export const formatId = (labelContent) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return id;
};

/**
 * Function that returns a parameter name in camelCase from a label text or an id.
 *
 * @function
 * @param {string} text
 * @returns {string} The formated name
 */
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

/**
 * Function that returns formated employee data.
 *
 * @see {@link formatDate}
 * @see {@link formatZipCode}
 * @function
 * @param {object} value
 * @returns {object} The formated employee data
 */
export const formatEmployeeData = (values) => {
  values.dateOfBirth = formatDate(values.dateOfBirth);
  values.startDate = formatDate(values.startDate);
  values.zipCode = formatZipCode(values.zipCode);

  return values;
};

/**
 * Function that returns a errors object from employee data.
 *
 * @function
 * @param {object} value
 * @returns {object} The formated date
 */
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
