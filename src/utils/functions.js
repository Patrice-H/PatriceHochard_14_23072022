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

const formatStreet = (street) => {
  let number = '';
  let name = '';
  let index = 0;
  const streetTab = street.toLowerCase().split(' ');
  if (streetTab.length <= 1) {
    return street;
  }
  if (parseInt(streetTab[0]) > 0) {
    number = streetTab[0];
    index++;
  }
  if (streetTab[1].length <= 2 && index === 1) {
    number = number + ' ' + streetTab[1];
    index++;
  }
  for (index; index < streetTab.length; index++) {
    if (name === '') {
      name = streetTab[index];
    } else {
      name = name + ' ' + streetTab[index];
    }
  }

  return name + ' ' + number;
};

export const sortList = (list, sortKey, orderKey) => {
  const newlist = [...list].sort((a, b) => {
    let itemA, itemB;
    switch (sortKey) {
      case 'first-name':
        itemA = a.firstName.toLowerCase();
        itemB = b.firstName.toLowerCase();
        break;
      case 'last-name':
        itemA = a.lastName.toLowerCase();
        itemB = b.lastName.toLowerCase();
        break;
      case 'start-date':
        itemA = a.startDate.toLowerCase();
        itemB = b.startDate.toLowerCase();
        break;
      case 'department':
        itemA = a.department.toLowerCase();
        itemB = b.department.toLowerCase();
        break;
      case 'date-of-birth':
        itemA = a.dateOfBirth.toLowerCase();
        itemB = b.dateOfBirth.toLowerCase();
        break;
      case 'street':
        itemA = formatStreet(a.street);
        itemB = formatStreet(b.street);
        break;
      case 'city':
        itemA = a.city.toLowerCase();
        itemB = b.city.toLowerCase();
        break;
      case 'state':
        itemA = a.state.toLowerCase();
        itemB = b.state.toLowerCase();
        break;
      case 'zip-code':
        itemA = a.zipCode;
        itemB = b.zipCode;
        break;
      default:
        itemA = a.firstName.toLowerCase();
        itemB = b.firstName.toLowerCase();
    }

    if (itemA < itemB) return orderKey === 'ascending' ? -1 : 1;
    if (itemA > itemB) return orderKey === 'ascending' ? 1 : -1;

    return 0;
  });

  return newlist;
};

export const filterList = (list, text) => {
  if (text === null) {
    return list;
  }

  let newList = [];
  newList.push(
    ...list.filter((employee) =>
      employee.firstName.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(
    ...list.filter((employee) =>
      employee.lastName.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(...list.filter((employee) => employee.startDate.includes(text)));
  newList.push(
    ...list.filter((employee) =>
      employee.department.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(
    ...list.filter((employee) => employee.dateOfBirth.includes(text))
  );
  newList.push(
    ...list.filter((employee) =>
      employee.street.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(
    ...list.filter((employee) =>
      employee.city.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(
    ...list.filter((employee) =>
      employee.state.toLowerCase().includes(text.toLowerCase())
    )
  );
  newList.push(
    ...list.filter((employee) => employee.zipCode.toString().includes(text))
  );

  if (newList.length === 0) {
    return list;
  }

  return Array.from(new Set(newList));
};

export const applyUserOptions = (list, filterKey, sortKey, orderKey) => {
  const filtredList = filterList(list, filterKey);
  const sortedList = sortList(filtredList, sortKey, orderKey);

  return sortedList;
};

export const formatId = (labelContent) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return id;
};

export const formatName = (labelContent) => {
  const tabName = labelContent.split(' ');
  let name = tabName[0].toLowerCase();
  for (let i = 1; i < tabName.length; i++) {
    name = name + tabName[i].charAt(0).toUpperCase() + tabName[i].slice(1);
  }

  return name;
};

export const formatZipCode = (number) => {
  let zipCode = number.toString();
  if (zipCode.length < 5) {
    return '0' + zipCode;
  }

  return zipCode;
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
