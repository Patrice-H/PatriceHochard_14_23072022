import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { sortedList } from '../../utils/sortedList';
import { setSortBy, setOrderBy } from '../../redux/displayOptionsSlice';
import { setList } from '../../redux/employeesSlice';
import sortBtn from '../../assets/sort-btn.png';
import sortAscBtn from '../../assets/sort-asc-btn.png';
import sortDescBtn from '../../assets/sort-desc-btn.png';

const SortButton = ({ elementType }) => {
  const employeesList = useAppSelector((state) => state.employees.list);
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  const dispatch = useAppDispatch();

  /* istanbul ignore next */
  const setSortedList = () => {
    let newOrder;
    if (sortedBy !== elementType) {
      dispatch(setOrderBy('ascending'));
      dispatch(setSortBy(elementType));
      newOrder = 'ascending';
    } else {
      if (orderedBy === 'ascending') {
        dispatch(setOrderBy('descending'));
        newOrder = 'descending';
      } else {
        dispatch(setOrderBy('ascending'));
        newOrder = 'ascending';
      }
    }
    const newList = sortedList([...employeesList], elementType, newOrder);
    dispatch(setList(newList));
  };

  const getImgSrc = () => {
    if (sortedBy !== elementType) {
      return sortBtn;
    }
    if (orderedBy === 'ascending') {
      return sortAscBtn;
    }
    return sortDescBtn;
  };

  return (
    <span>
      <img src={getImgSrc()} alt="Sort Button" onClick={setSortedList} />
    </span>
  );
};

export default SortButton;
