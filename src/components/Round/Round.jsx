import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';

const Round = () => {
  const [results, setResults] = useState([]);
  const [raceName, setRaceName] = useState('');
  const location = useLocation();
  const round = location.state.round;
  const season = location.state.season;

  useEffect(() => {
    getRoundData(season, round).then((response) => {
      setResults(response.Results);
      setRaceName(response.raceName);
    });
  }, [season, round]);

  return results.length
    ? <>
      <h2>{raceName}</h2>
      <ul>
        {results.map((result) => {
          return (
            <li>
              <div>{result.position}</div>
              <div>{result.number}</div>
              <div>{`${result.Driver.givenName} ${result.Driver.familyName}`}</div>
              <div>{result.status}</div>
            </li>
          )
        })}
      </ul>
    </>
    : <p>Loading...</p>
}

export default Round;
