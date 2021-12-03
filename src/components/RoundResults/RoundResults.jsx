import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getRoundData} from '../../api/getRoundData';
import Title from '../UI/Title/Title';
import Loader from '../UI/Loader/Loader';
import RoundResult from './RoundResult/RoundResult';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import ResultsHeader from './ResultsHeader/ResultsHeader';
import {CenteredContent} from '../UI/Grid/GridRow/styles';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
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
      if (!response) {
        setIsNotAvailable(true);
        return;
      }

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

  if (isNotAvailable) return (
    <>
      <Title title={'...Oops!'}/>
      <CenteredContent>
        <p>No data is available for this round. Please, try again later.</p>
      </CenteredContent>
    </>
  );

  return (
    <>
      <Title title={raceData.raceName}/>
      {!results.length && <Loader/>}
      {results.length > 0 &&
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
      }
    </>
  );
}

export default RoundResults;
