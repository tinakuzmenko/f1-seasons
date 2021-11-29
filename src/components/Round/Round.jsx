import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import {Results} from './styles';
import Title from '../UI/Title/Title';
import Loader from '../UI/Loader/Loader';
import ResultRow from '../ResultRow/ResultRow';
import {RowWrapper} from '../ResultRow/styles';

const Round = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const {seasonId, roundId} = useParams();

  useEffect(() => {
    getRoundData(seasonId, roundId).then((response) => {
      setRaceData(response);

      const sortedResults = [...response.Results].sort((a, b) => a.position - b.position);
      setResults(sortedResults);
    });
  }, [seasonId, roundId]);

  return (
    results.length
      ? <>
        <Title title={raceData.raceName}/>
        <Results>
          {results.map((result) => <ResultRow key={result.position} result={result}/>)}
        </Results>
      </>
      : <Loader/>
  );
}

export default Round;
