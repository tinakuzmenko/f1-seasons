import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getRoundData } from '../../api/getRoundData';
import {
  getFromStorageData,
  setToStorageData,
} from '../../utilities/localStorage';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import { CenteredContent } from '../UI/Grid/GridRow/styles';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import RoundResultsList from './RoundResultsList/RoundResultsList';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const { seasonId, roundId } = useParams();

  useEffect(() => {
    const storageItems = getFromStorageData('favorites');
    setFavoriteDrivers(storageItems ?? []);
  }, []);

  useEffect(() => {
    getRoundData(seasonId, roundId).then(response => {
      if (!response) {
        setIsNotAvailable(true);
        return;
      }

      const sortedResults = [...response.Results].sort(
        (a, b) => a.position - b.position,
      );

      setRaceData(response);
      setResults(sortedResults);
    });
  }, [seasonId, roundId]);

  useEffect(() => {
    setToStorageData('favorites', favoriteDrivers);
  }, [favoriteDrivers]);

  const addFavoriteDriver = (drivers, id) => [...drivers, id];

  const removeFavoriteDriver = (drivers, id) =>
    drivers.filter(driver => driver !== id);

  const favoritesClickHandler = id => {
    setFavoriteDrivers(prevFavoriteDrivers =>
      !prevFavoriteDrivers.includes(id)
        ? addFavoriteDriver(prevFavoriteDrivers, id)
        : removeFavoriteDriver(prevFavoriteDrivers, id),
    );
  };

  const title = isNotAvailable ? '...Oops!' : raceData.raceName;

  return (
    <>
      <SectionTitle>
        <h2>{title}</h2>
      </SectionTitle>
      <GridLayout>
        <CenteredContent>
          <Link
            to={`/seasons/${seasonId}`}
          >{`<< Back to season ${seasonId}`}</Link>
        </CenteredContent>
        {isNotAvailable ? (
          <CenteredContent>
            <p>No data is available for this round. Please, try again later.</p>
          </CenteredContent>
        ) : (
          <RoundResultsList
            onFavoritesClick={favoritesClickHandler}
            results={results}
            favorites={favoriteDrivers}
          />
        )}
      </GridLayout>
    </>
  );
};

export default RoundResults;
