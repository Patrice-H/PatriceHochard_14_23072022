const state = {
  employees: {
    list: [],
  },
  displayOptions: {
    sortBy: '',
    orderBy: '',
    tableLength: 10,
    pageNumber: 1,
  },
};

export const mockedAppSelector = (f) => f(state);
