import {getSeasonRounds} from '../../api/getSeasonRounds';
import {useEffect, useState} from 'react';
import RoundItem from '../RoundItem/RoundItem';
import {RoundsListWrapper} from './styles';

const RoundsList = (props) => {
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
      getSeasonRounds(props.season).then((response) => {
        setRounds(response);
      });
    }, [props.season]);

    return (
      <RoundsListWrapper>
        {!rounds.length && <p>Loading...</p>}
        {rounds.map((round) => <RoundItem key={round.round} season={props.season} round={round}/>)}
      </RoundsListWrapper>
    )
  }
;

export default RoundsList;
