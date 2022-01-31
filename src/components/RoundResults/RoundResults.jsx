import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Title from '../UI/Title/Title';
import {CenteredContent} from '../UI/Grid/GridRow/styles';
import {getFromStorageData, setToStorageData} from '../../utilities/localStorage';
import RoundResultsList from './RoundResultsList/RoundResultsList';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const {seasonId, roundId} = useParams();

  useEffect(() => {
    const storageItems = getFromStorageData('favorites');
    setFavoriteDrivers(storageItems ?? []);
  }, []);

  useEffect(() => {
    getRoundData(seasonId, roundId).then((response) => {
      if (!response) {
        setIsNotAvailable(true);
        return;
      }

      const sortedResults = [...response.Results].sort((a, b) => a.position - b.position);

      setRaceData(response);
      setResults(sortedResults);
    });
  }, [seasonId, roundId]);

  useEffect(() => {
    setToStorageData('favorites', favoriteDrivers);
  }, [favoriteDrivers]);

  const addFavoriteDriver = (drivers, id) => [...drivers, id];

  const removeFavoriteDriver = (drivers, id) => drivers.filter((driver) => driver !== id);

  const favoritesClickHandler = (id) => {
    setFavoriteDrivers((prevFavoriteDrivers) => {
      return !prevFavoriteDrivers.includes(id)
        ? addFavoriteDriver(prevFavoriteDrivers, id)
        : removeFavoriteDriver(prevFavoriteDrivers, id);
    });
  };

  const title = isNotAvailable ? '...Oops!' : raceData.raceName;

  return (
    <>
      <Title title={title}/>
      <GridLayout>
        {isNotAvailable
          ? <CenteredContent><p>No data is available for this round. Please, try again later.</p></CenteredContent>
          : <RoundResultsList onFavoritesClick={favoritesClickHandler} results={results} favorites={favoriteDrivers}/>
        }
      </GridLayout>
    </>
  );
}

export default RoundResults;
