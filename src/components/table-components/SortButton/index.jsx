import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import { setSortBy, setOrderBy } from '../../../redux/displayOptionsSlice';
import sortBtn from '../../../assets/sort-btn.png';
import sortAscBtn from '../../../assets/sort-asc-btn.png';
import sortDescBtn from '../../../assets/sort-desc-btn.png';

const SortButton = ({ elementType }) => {
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  const dispatch = useAppDispatch();

  /* istanbul ignore next */
  const setSortedList = () => {
    if (sortedBy !== elementType) {
      dispatch(setOrderBy('ascending'));
      dispatch(setSortBy(elementType));
    } else {
      if (orderedBy === 'ascending') {
        dispatch(setOrderBy('descending'));
      } else {
        dispatch(setOrderBy('ascending'));
      }
    }
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
