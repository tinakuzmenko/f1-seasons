import { FC } from 'react';

import {
  CircuitInterface,
  LocationInterface,
} from '../../../../../types/Round.interface';
import Flag from '../../../../UI/Flag/Flag';

import { RoundItemCountry, RoundItemLocationWrapper } from './styles';

interface RoundLocationProps {
  circuit: CircuitInterface;
  location: LocationInterface;
}

const RoundLocation: FC<RoundLocationProps> = ({ circuit, location }) => (
  <RoundItemLocationWrapper>
    <Flag country={location.country} width={40} height={40} />
    <div>
      <div>{circuit.circuitName}</div>
      <RoundItemCountry>{`${location.locality}, ${location.country}`}</RoundItemCountry>
    </div>
  </RoundItemLocationWrapper>
);

export default RoundLocation;
