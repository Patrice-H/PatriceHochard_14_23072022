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
        itemA = a.street.toLowerCase();
        itemB = b.street.toLowerCase();
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
  newList.push(...list.filter((employee) => employee.zipCode.includes(text)));
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
