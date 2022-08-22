import reducer, {
  setSortBy,
  setOrderBy,
  setTableLength,
  setPageNumber,
  setSearchFilter,
} from './displayOptionsSlice';

const previousState = {
  sortBy: null,
  orderBy: null,
  tableLength: 10,
  pageNumber: 1,
  searchFilter: '',
};

describe('Display options slice tests suite', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(previousState);
  });

  it('Should change sortBy state', () => {
    expect(reducer(previousState, setSortBy('test'))).toEqual({
      sortBy: 'test',
      orderBy: null,
      tableLength: 10,
      pageNumber: 1,
      searchFilter: '',
    });
  });

  it('Should change orderBy state', () => {
    expect(reducer(previousState, setOrderBy('test'))).toEqual({
      sortBy: null,
      orderBy: 'test',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: '',
    });
  });

  it('Should change tableLength state', () => {
    expect(reducer(previousState, setTableLength(25))).toEqual({
      sortBy: null,
      orderBy: null,
      tableLength: 25,
      pageNumber: 1,
      searchFilter: '',
    });
  });

  it('Should change pageNumber state', () => {
    expect(reducer(previousState, setPageNumber(2))).toEqual({
      sortBy: null,
      orderBy: null,
      tableLength: 10,
      pageNumber: 2,
      searchFilter: '',
    });
  });

  it('Should change searchFilter state', () => {
    expect(reducer(previousState, setSearchFilter('test'))).toEqual({
      sortBy: null,
      orderBy: null,
      tableLength: 10,
      pageNumber: 1,
      searchFilter: 'test',
    });
  });
});
