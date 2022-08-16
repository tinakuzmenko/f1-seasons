import { FC, useEffect, useState } from 'react';

import {
  getFromStorageData,
  setToStorageData,
} from '../../utilities/localStorage';
import CenteredContent from '../UI/CenteredContent/CenteredContent';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import FavoritesList from './FavoritesList/FavoritesList';

const Favorites: FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFromStorageData('favorites') ?? []);
  }, []);

  useEffect(() => {
    setToStorageData('favorites', favorites);
  }, [favorites]);

  const removeClickHandler = (removedDriver: string) => {
    setFavorites(prevFavoriteDrivers =>
      prevFavoriteDrivers.filter(driver => driver !== removedDriver),
    );
  };

  return (
    <>
      <SectionTitle>
        <h2>Favorites</h2>
      </SectionTitle>
      <GridLayout>
        {!favorites.length ? (
          <CenteredContent>Your favorites list is empty.</CenteredContent>
        ) : (
          <FavoritesList favorites={favorites} onRemove={removeClickHandler} />
        )}
      </GridLayout>
    </>
  );
};

export default Favorites;
