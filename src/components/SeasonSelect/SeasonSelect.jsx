import {SeasonSelectWrapper} from './styles';

const SeasonSelect = (props) => {
  const selectChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <SeasonSelectWrapper>
      <h2>Selected season:</h2>
      <select value={props.selected} onChange={selectChangeHandler}>
        {props.seasons.map((season) => <option key={season.season}>{season.season}</option>)}
      </select>
    </SeasonSelectWrapper>
  )
}

export default SeasonSelect;
