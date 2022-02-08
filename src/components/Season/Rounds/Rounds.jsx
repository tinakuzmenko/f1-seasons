import { useEffect, useState } from 'react';

import useRequest from '../../../hooks/useRequest';
import GridLayout from '../../UI/Grid/GridLayout/GridLayout';
import { CenteredContent } from '../../UI/Grid/GridRow/styles';
import Loader from '../../UI/Loader/Loader';

import Round from './Round/Round';

const Rounds = props => {
  const [rounds, setRounds] = useState([]);
  const { isLoading, error, sendRequest: getSeasonRounds } = useRequest();

  useEffect(() => {
    const storeRounds = response => setRounds(response.MRData.RaceTable.Races);

    getSeasonRounds({ endpoint: 'rounds', params: props.season }, storeRounds);
  }, [getSeasonRounds, props.season]);

  if (isLoading) return <Loader />;
  if (error) return <CenteredContent>{error}</CenteredContent>;

  return (
    <GridLayout>
      {rounds.map(round => (
        <Round key={round.round} season={props.season} round={round} />
      ))}
    </GridLayout>
  );
};

export default Rounds;
