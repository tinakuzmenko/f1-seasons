import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Loader from '../UI/Loader/Loader';

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

  return results.length
    ? <>
      <h2>{raceData.raceName}</h2>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.position}>
              <div>{result.position}</div>
              <div>{result.number}</div>
              <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
              <div>{result.status}</div>
            </li>
          )
        })}
      </ul>
    </>
    : <Loader/>
}

export default Round;
