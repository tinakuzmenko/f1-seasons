import { FC, useEffect, useState } from 'react';

import useRequest, { Response, TransformData } from '../../../hooks/useRequest';
import { RaceInterface } from '../../../types/Round.interface';
import CenteredContent from '../../UI/CenteredContent/CenteredContent';
import GridLayout from '../../UI/Grid/GridLayout/GridLayout';
import Loader from '../../UI/Loader/Loader';

import Round from './Round/Round';

interface RoundsProps {
  season: string;
}

const Rounds: FC<RoundsProps> = ({ season }) => {
  const [rounds, setRounds] = useState<RaceInterface[]>([]);
  const { isLoading, error, sendRequest: getSeasonRounds } = useRequest();

  useEffect(() => {
    const storeRounds: TransformData = (response: Response) => {
      if ('RaceTable' in response.MRData) {
        setRounds(response.MRData.RaceTable.Races);
      }
    };

    getSeasonRounds({ endpoint: 'rounds', params: season }, storeRounds);

    return () => {
      setRounds([]);
    };
  }, [getSeasonRounds, season]);

  if (isLoading) return <Loader />;
  if (error) return <CenteredContent>{error}</CenteredContent>;

  return (
    <GridLayout>
      {rounds.map(round => (
        <Round key={round.round} season={season} round={round} />
      ))}
    </GridLayout>
  );
};

export default Rounds;
