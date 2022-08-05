import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useRequest, { Response } from '../../hooks/useRequest';
import { RaceInterface, ResultInterface } from '../../types/Round.interface';
import { BASE_URL } from '../../utilities/constants';
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
  const [raceData, setRaceData] = useState<RaceInterface | null>(null);
  const [results, setResults] = useState<ResultInterface[]>([]);
  const { isLoading, error, sendRequest: getRoundData } = useRequest();
  const [favoriteDrivers, setFavoriteDrivers] = useState<string[]>([]);
  const { seasonId = '', roundId = '' } = useParams();

  useEffect(() => {
    const storageItems = getFromStorageData('favorites');
    setFavoriteDrivers(storageItems ?? []);
  }, []);

  useEffect(() => {
    const storeRoundData = (response: Response) => {
      if ('RaceTable' in response.MRData) {
        const sortedResults = [
          ...response.MRData.RaceTable.Races[0].Results,
        ].sort((a, b) => parseInt(a.position, 10) - parseInt(b.position, 10));

        setRaceData(response.MRData.RaceTable.Races[0]);
        setResults(sortedResults);
      }
    };

    const endpoint = `${BASE_URL}/${seasonId}/${roundId}/results.json`;

    getRoundData({ endpoint }, storeRoundData);
  }, [seasonId, roundId]);

  useEffect(() => {
    setToStorageData('favorites', favoriteDrivers);
  }, [favoriteDrivers]);

  const addFavoriteDriver = (drivers: string[], id: string) => [...drivers, id];

  const removeFavoriteDriver = (drivers: string[], id: string) =>
    drivers.filter(driver => driver !== id);

  const favoritesClickHandler = (id: string) => {
    setFavoriteDrivers(prevFavoriteDrivers =>
      !prevFavoriteDrivers.includes(id)
        ? addFavoriteDriver(prevFavoriteDrivers, id)
        : removeFavoriteDriver(prevFavoriteDrivers, id),
    );
  };

  const title = error || !raceData ? '...Oops!' : raceData.raceName;

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
