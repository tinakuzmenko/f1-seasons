import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Title from '../UI/Title/Title';
import Loader from '../UI/Loader/Loader';
import RoundResult from './RoundResult/RoundResult';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import ResultsHeader from './ResultsHeader/ResultsHeader';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const {seasonId, roundId} = useParams();

  useEffect(() => {
    const storageItems = localStorage.getItem('favorites');

    if (!storageItems) {
      localStorage.setItem('favorites', JSON.stringify([]));
      return;
    }

    setFavoriteDrivers(JSON.parse(storageItems));
  }, []);

  useEffect(() => {
    getRoundData(seasonId, roundId).then((response) => {
      if (!response) return;

      const sortedResults = [...response.Results].sort((a, b) => a.position - b.position);

      setRaceData(response);
      setResults(sortedResults);
    });
  }, [seasonId, roundId]);

  const getIsFavorite = (item) => favoriteDrivers.includes(item.Driver.driverId);

  const favoritesClickHandler = (id, isFavorite) => {
    setFavoriteDrivers((prevFavoriteDrivers) => {
      if (isFavorite && prevFavoriteDrivers.includes(id)) return;
      if (!isFavorite && !prevFavoriteDrivers.includes(id)) return;

      const newFavoriteDrivers = isFavorite
        ? [...prevFavoriteDrivers, id]
        : prevFavoriteDrivers.filter((driver) => driver !== id);

      localStorage.setItem('favorites', JSON.stringify(newFavoriteDrivers));

      return newFavoriteDrivers;
    });
  };

  if (!results.length) return <Loader/>

  return (
    <>
      <Title title={raceData.raceName}/>
      <GridLayout>
        <ResultsHeader/>
        {results.map((result) => {
          return (
            <RoundResult
              key={result.position}
              result={result}
              isFavorite={getIsFavorite(result)}
              onFavoritesClick={favoritesClickHandler}
            />
          )
        })}
      </GridLayout>
    </>
  );
}

export default RoundResults;
