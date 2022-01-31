import {useEffect, useState} from 'react';
import {getFromStorageData, setToStorageData} from '../../utilities/localStorage';
import {CenteredContent} from '../UI/Grid/GridRow/styles';
import Title from '../UI/Title/Title';
import FavoritesList from './FavoritesList/FavoritesList';


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
      <Title title='Favorites'/>
      {!favorites.length
        ? <CenteredContent>Your favorites list is empty.</CenteredContent>
        : <FavoritesList favorites={favorites} onRemove={removeClickHandler}/>}
    </>
  )
}

export default Favorites;
