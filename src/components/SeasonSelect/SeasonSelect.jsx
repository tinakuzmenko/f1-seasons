const SeasonSelect = (props) => {
  const selectChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <select value={props.selected} onChange={selectChangeHandler}>
      {props.seasons.map((season) => <option key={season.season}>{season.season}</option>)}
    </select>
  )
}

export default SeasonSelect;
