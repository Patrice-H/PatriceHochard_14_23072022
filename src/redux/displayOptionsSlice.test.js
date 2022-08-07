import reducer, {
  setSortBy,
  setOrderBy,
  setTableLength,
  setPageNumber,
} from './displayOptionsSlice';

describe('Display options slice tests suite', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
    });
  });

  it('Should change sortBy state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
    };
    expect(reducer(previousState, setSortBy('test'))).toEqual({
      sortBy: 'test',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
    });
  });

  it('Should change orderBy state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'test',
      tableLength: 10,
      pageNumber: 1,
    };
    expect(reducer(previousState, setOrderBy('test'))).toEqual({
      sortBy: 'first-name',
      orderBy: 'test',
      tableLength: 10,
      pageNumber: 1,
    });
  });

  it('Should change tableLength state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
    };
    expect(reducer(previousState, setTableLength(25))).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 25,
      pageNumber: 1,
    });
  });

  it('Should change pageNumber state', () => {
    const previousState = {
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 1,
    };
    expect(reducer(previousState, setPageNumber(2))).toEqual({
      sortBy: 'first-name',
      orderBy: 'ascending',
      tableLength: 10,
      pageNumber: 2,
    });
  });
});
