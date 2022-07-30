const state = {
  employees: {
    list: [],
  },
};

export const mockedAppSelector = (f) => f(state);
