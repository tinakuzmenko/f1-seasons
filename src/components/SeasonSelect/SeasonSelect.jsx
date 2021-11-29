import Title from '../UI/Title/Title';

const SeasonSelect = (props) => {
  const selectChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Title title={'Selected season:'}>
      <select value={props.selected} onChange={selectChangeHandler}>
        {props.seasons.map((season) => <option key={season.season}>{season.season}</option>)}
      </select>
    </Title>
  )
}

export default SeasonSelect;
