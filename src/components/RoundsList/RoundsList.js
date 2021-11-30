import {useEffect, useState} from 'react';
import {getSeasonRounds} from '../../api/getSeasonRounds';
import Round from '../Round/Round';
import Loader from '../UI/Loader/Loader';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';

const RoundsList = (props) => {
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
      getSeasonRounds(props.season).then((response) => {
        setRounds(response);
      });
    }, [props.season]);

    if (!rounds.length) return <Loader/>;

    return (
      <GridLayout>
        {rounds.map((round) => <Round key={round.round} season={props.season} round={round}/>)}
      </GridLayout>
    )
  }
;

export default RoundsList;
