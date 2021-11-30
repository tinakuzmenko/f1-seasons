import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Title from '../UI/Title/Title';
import Loader from '../UI/Loader/Loader';
import RoundResultRow from '../RoundResultRow/RoundResultRow';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const {seasonId, roundId} = useParams();

  useEffect(() => {
    getRoundData(seasonId, roundId).then((response) => {
      if (!response) return;

      const sortedResults = [...response.Results].sort((a, b) => a.position - b.position);

      setRaceData(response);
      setResults(sortedResults);
    });
  }, [seasonId, roundId]);

  if (!results.length) return <Loader/>

  return (
    <>
      <Title title={raceData.raceName}/>
      <GridLayout>
        {results.map((result) => <RoundResultRow key={result.position} result={result}/>)}
      </GridLayout>
    </>
  );
}

export default RoundResults;
