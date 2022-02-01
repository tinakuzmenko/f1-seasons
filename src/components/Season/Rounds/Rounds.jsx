import { useEffect, useState } from 'react';

import { getSeasonRounds } from '../../../api/getSeasonRounds';
import GridLayout from '../../UI/Grid/GridLayout/GridLayout';
import Loader from '../../UI/Loader/Loader';

import Round from './Round/Round';

const Rounds = props => {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    getSeasonRounds(props.season).then(response => {
      setRounds(response);
    });
  }, [props.season]);

  if (!rounds.length) return <Loader />;

  return (
    <GridLayout>
      {rounds.map(round => (
        <Round key={round.round} season={props.season} round={round} />
      ))}
    </GridLayout>
  );
};

export default Rounds;
