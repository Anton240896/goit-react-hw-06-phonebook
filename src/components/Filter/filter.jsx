import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilters } from 'redux/selectors';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);

  return (
    <label>
      Find contacts:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </label>
  );
};
