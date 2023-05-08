import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterInput} htmlFor=" "></label>
      Filter contacts by name:
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
};

export default Filter;