import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

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

// import { useDispatch, useSelector } from 'react-redux';

// import { setFilter } from 'redux/filterSlice';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.filter.filter);

//   const changeFilter = evt => {
//     dispatch(setFilter(evt.target.value));
//   };

//   return (
//     <label>
//       Find contacts:
//       <input type="text" name="filter" value={filter} onChange={changeFilter} />
//     </label>
//   );
// };