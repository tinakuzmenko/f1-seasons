import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { RaceInterface } from '../../../../types/Round.interface';
import { GridRowClickable } from '../../../UI/Grid/GridRow/styles';

import RoundDate from './RoundDate/RoundDate';
import RoundLocation from './RoundLocation/RoundLocation';
import { RoundRace } from './styles';

interface RoundProps {
  round: RaceInterface;
  season: string;
}

const Round: FC<RoundProps> = ({ round, season }) => {
  const navigate = useNavigate();
  const location = round.Circuit.Location;

  const rowClickHandler = (): void =>
    navigate(`/seasons/${season}/${round.round}`);

  return (
    <GridRowClickable type="round" onClick={rowClickHandler}>
      <RoundDate date={round.date} />
      <RoundRace>{round.raceName}</RoundRace>
      <RoundLocation location={location} circuit={round.Circuit} />
    </GridRowClickable>
  );
};

export default Round;
