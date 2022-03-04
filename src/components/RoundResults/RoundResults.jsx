import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useRequest from '../../hooks/useRequest';
import {
  getFromStorageData,
  setToStorageData,
} from '../../utilities/localStorage';
import CenteredContent from '../UI/CenteredContent/CenteredContent';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import Loader from '../UI/Loader/Loader';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import RoundResultsList from './RoundResultsList/RoundResultsList';

const RoundResults = () => {
  const [raceData, setRaceData] = useState({});
  const [results, setResults] = useState([]);
  const { isLoading, error, sendRequest: getRoundData } = useRequest();
  const [favoriteDrivers, setFavoriteDrivers] = useState([]);
  const { seasonId, roundId } = useParams();

  useEffect(() => {
    const storageItems = getFromStorageData('favorites');
    setFavoriteDrivers(storageItems ?? []);
  }, []);

  useEffect(() => {
    const storeRoundData = response => {
      const sortedResults = [
        ...response.MRData.RaceTable.Races[0].Results,
      ].sort((a, b) => a.position - b.position);

      setRaceData(response.MRData.RaceTable.Races[0]);
      setResults(sortedResults);
    };

    getRoundData(
      { endpoint: 'round', params: [seasonId, roundId] },
      storeRoundData,
    );
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

  const title = error ? '...Oops!' : raceData.raceName;

  if (isLoading) return <Loader />;

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
        {error ? (
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
