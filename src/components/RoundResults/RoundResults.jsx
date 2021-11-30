import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Title from '../UI/Title/Title';
import Loader from '../UI/Loader/Loader';
import ResultRow from '../ResultRow/ResultRow';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';

const RoundResults = () => {
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
        <GridLayout>
          {results.map((result) => <ResultRow key={result.position} result={result}/>)}
        </GridLayout>
      </>
      : <Loader/>
  );
}

export default RoundResults;
