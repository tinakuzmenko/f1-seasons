import {useEffect, useState} from 'react';
import {getFromStorageData, setToStorageData} from '../../utilities/localStorage';
import {CenteredContent} from '../UI/Grid/GridRow/styles';
import FavoritesList from './FavoritesList/FavoritesList';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFromStorageData('favorites') ?? []);
  }, [])

  useEffect(() => {
    setToStorageData('favorites', favorites);
  }, [favorites])

  const removeClickHandler = (removedDriver) => {
    setFavorites((prevFavoriteDrivers) => prevFavoriteDrivers.filter((driver) => driver !== removedDriver));
  }

  return (
    <>
      <SectionTitle>
        <h2>Favorites</h2>
      </SectionTitle>
      <GridLayout>
        {
          !favorites.length
            ? <CenteredContent>Your favorites list is empty.</CenteredContent>
            : <FavoritesList favorites={favorites} onRemove={removeClickHandler}/>
        }
      </GridLayout>
    </>
  )
}

export default Favorites;
