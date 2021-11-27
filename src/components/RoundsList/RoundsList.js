import {getSeasonRounds} from '../../api/getSeasonRounds';
import {useEffect, useState} from 'react';
import Round from '../Round/Round';
import {RoundsListWrapper} from './styles';

const RoundsList = (props) => {
  const [rounds, setRounds] = useState();

  useEffect(() => {
    getSeasonRounds(props.season).then((response) => {
      setRounds(response);
    });
  }, [props.season]);

  return (
    <>
      {
        rounds
          ? <RoundsListWrapper>{rounds.map((round) => <Round key={round.round} round={round}/>)}</RoundsListWrapper>
          : <p>Loading...</p>
      }
    </>
  )
};

export default RoundsList;
