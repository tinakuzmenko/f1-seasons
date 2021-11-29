import {RoundItemCountry, RoundItemLocationWrapper} from './styles';
import Flag from '../UI/Flag/Flag';

const RoundItemLocation = ({circuit, location}) => {
  return (
    <RoundItemLocationWrapper>
      <Flag country={location.country} size={40}/>
      <div>
        <div>{circuit.circuitName}</div>
        <RoundItemCountry>{`${location.locality}, ${location.country}`}</RoundItemCountry>
      </div>
    </RoundItemLocationWrapper>
  );
}

export default RoundItemLocation;
