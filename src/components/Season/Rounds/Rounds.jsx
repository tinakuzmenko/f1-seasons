import { useEffect, useState } from 'react';

import useRequest from '../../../hooks/useRequest';
import CenteredContent from '../../UI/CenteredContent/CenteredContent';
import GridLayout from '../../UI/Grid/GridLayout/GridLayout';
import Loader from '../../UI/Loader/Loader';

import Round from './Round/Round';

const Rounds = ({ season }) => {
  const [rounds, setRounds] = useState([]);
  const { isLoading, error, sendRequest: getSeasonRounds } = useRequest();

  useEffect(() => {
    const storeRounds = response => setRounds(response.MRData.RaceTable.Races);
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
