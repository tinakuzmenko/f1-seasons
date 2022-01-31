import {RoundItemCountry, RoundItemLocationWrapper} from './styles';
import Flag from '../../../../UI/Flag/Flag';

const RoundLocation = ({circuit, location}) => {
  return (
    <RoundItemLocationWrapper>
      <Flag country={location.country} width={40} height={40}/>
      <div>
        <div>{circuit.circuitName}</div>
        <RoundItemCountry>{`${location.locality}, ${location.country}`}</RoundItemCountry>
      </div>
    </RoundItemLocationWrapper>
  );
}

export default RoundLocation;
