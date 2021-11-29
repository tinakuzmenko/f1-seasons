import {RoundItemLink, RoundItemRace} from './styles';
import {useNavigate} from 'react-router-dom';
import RoundItemDate from '../RoundItemDate/RoundItemDate';
import RoundItemLocation from '../RoundItemLocation/RoundItemLocation';

const RoundItem = ({round, season}) => {
  const navigate = useNavigate();
  const location = round.Circuit.Location;

  const roundClickHandler = (event) => {
    event.preventDefault();
    navigate(`/seasons/${season}/${round.round}`, {replace: true});
  };

  return (
    <RoundItemLink onClick={roundClickHandler}>
      <RoundItemDate date={round.date}/>
      <RoundItemRace>{round.raceName}</RoundItemRace>
      <RoundItemLocation location={location} circuit={round.Circuit}/>
    </RoundItemLink>
  );
};

export default RoundItem;
