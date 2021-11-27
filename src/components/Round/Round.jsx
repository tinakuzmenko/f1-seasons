const Round = ({round}) => {
  return (
    <li>
      <div>{round.round}</div>
      <div>{round.date}</div>
      <div>{round.raceName}</div>
      <div>{round.Circuit.Location.locality}</div>
      <div>{round.Circuit.Location.country}</div>
    </li>
  );
};

export default Round;
