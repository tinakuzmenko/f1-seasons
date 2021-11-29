import {RoundItemInnerWrapper, RoundItemLink} from './styles';
import {useNavigate} from 'react-router-dom';
import RoundItemDate from '../RoundItemDate/RoundItemDate';
import Flag from '../UI/Flag/Flag';
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
      <RoundItemInnerWrapper>
        <RoundItemDate date={round.date}/>
      </RoundItemInnerWrapper>
      <RoundItemInnerWrapper>
        <div><strong>{`#${round.round}`}</strong></div>
        <div>{round.raceName}</div>
      </RoundItemInnerWrapper>
      <RoundItemInnerWrapper>
        <Flag country={location.country} size={40}/>
        <RoundItemLocation location={location} circuit={round.Circuit}/>
      </RoundItemInnerWrapper>
    </RoundItemLink>
  );
};

export default RoundItem;
