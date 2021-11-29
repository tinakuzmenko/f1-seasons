import {useEffect, useState} from 'react';
import {getSeasonRounds} from '../../api/getSeasonRounds';
import {RoundsListWrapper} from './styles';
import RoundItem from '../RoundItem/RoundItem';
import Loader from '../UI/Loader/Loader';

const RoundsList = (props) => {
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
      getSeasonRounds(props.season).then((response) => {
        setRounds(response);
      });
    }, [props.season]);

    return (
      <RoundsListWrapper>
        {!rounds.length && <Loader/>}
        {rounds.map((round) => {
          return (
            <li key={round.round}>
              <RoundItem season={props.season} round={round}/>
            </li>
          )
        })}
      </RoundsListWrapper>
    )
  }
;

export default RoundsList;
