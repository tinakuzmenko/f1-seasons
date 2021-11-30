import {RoundRace} from './styles';
import {useNavigate} from 'react-router-dom';
import RoundDate from './RoundDate/RoundDate';
import RoundLocation from './RoundLocation/RoundLocation';
import {GridRowClickable} from '../../../UI/Grid/GridRow/styles';

const Round = ({round, season}) => {
  const navigate = useNavigate();
  const location = round.Circuit.Location;

  return (
    <GridRowClickable
      columns={'auto 2fr 3fr'}
      onClick={() => navigate(`/seasons/${season}/${round.round}`, {replace: true})}
    >
      <RoundDate date={round.date}/>
      <RoundRace>{round.raceName}</RoundRace>
      <RoundLocation location={location} circuit={round.Circuit}/>
    </GridRowClickable>
  );
};

export default Round;
