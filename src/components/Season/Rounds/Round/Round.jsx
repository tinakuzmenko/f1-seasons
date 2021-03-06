import { useNavigate } from 'react-router-dom';

import { GridRowClickable } from '../../../UI/Grid/GridRow/styles';

import RoundDate from './RoundDate/RoundDate';
import RoundLocation from './RoundLocation/RoundLocation';
import { RoundRace } from './styles';

const Round = ({ round, season }) => {
  const navigate = useNavigate();
  const location = round.Circuit.Location;

  const rowClickHandler = () => navigate(`/seasons/${season}/${round.round}`);

  return (
    <GridRowClickable type="round" onClick={rowClickHandler}>
      <RoundDate date={round.date} />
      <RoundRace>{round.raceName}</RoundRace>
      <RoundLocation location={location} circuit={round.Circuit} />
    </GridRowClickable>
  );
};

export default Round;
