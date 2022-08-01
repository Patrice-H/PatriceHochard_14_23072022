export const sortedList = (list, sortKey, orderKey) => {
  const newlist = list.sort((a, b) => {
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
