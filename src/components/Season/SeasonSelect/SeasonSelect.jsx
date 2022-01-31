import { SelectWrapper } from './styles';

const SeasonSelect = props => {
  const selectChangeHandler = event => {
    props.onChange(event.target.value);
  };

  return (
    <SelectWrapper value={props.selected} onChange={selectChangeHandler}>
      {props.seasons.map(season => (
        <option key={season.season}>{season.season}</option>
      ))}
    </SelectWrapper>
  );
};

export default SeasonSelect;
