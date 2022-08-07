import reducer, {
  setSortBy,
  setOrderBy,
  setTableLength,
  setPageNumber,
  setSearchFilter,
} from './displayOptionsSlice';

describe('Display options slice tests suite', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    });
  });

  it('Should change sortBy state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    };
    expect(reducer(previousState, setSortBy('test'))).toEqual({
      sortBy: 'test',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    });
  });

  it('Should change orderBy state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    };
    expect(reducer(previousState, setOrderBy('test'))).toEqual({
      sortBy: 'first-name',
      orderBy: 'test',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    });
  });

  it('Should change tableLength state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    };
    expect(reducer(previousState, setTableLength(25))).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 25,
      pageNumber: 1,
      searchFilter: null,
    });
  });

  it('Should change pageNumber state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    };
    expect(reducer(previousState, setPageNumber(2))).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 2,
      searchFilter: null,
    });
  });

  it('Should change searchFilter state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: null,
    };
    expect(reducer(previousState, setSearchFilter('test'))).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
      searchFilter: 'test',
    });
  });
});
