import {RoundItemCountry} from './styles';

const RoundItemLocation = ({circuit, location}) => {
  return (
    <div>
      <div>{circuit.circuitName}</div>
      <RoundItemCountry>{`${location.locality}, ${location.country}`}</RoundItemCountry>
    </div>
  );
}

export default RoundItemLocation;
