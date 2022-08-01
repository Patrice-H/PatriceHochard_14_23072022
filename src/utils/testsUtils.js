const state = {
  employees: {
    list: [],
  },
  displayOptions: {
    sortBy: '',
    orderBy: '',
  },
};

export const mockedAppSelector = (f) => f(state);
