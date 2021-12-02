import Title from '../UI/Title/Title';
import {useEffect, useState} from 'react';
import {CenteredContent} from '../UI/Grid/GridRow/styles';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import FavoriteDriver from './FavoriteDriver/FavoriteDriver';
import FavoritesHeader from './FavoritesHeader/FavoritesHeader';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (!storedFavorites) return;

    setFavorites(storedFavorites);
  }, [])

  const removeClickHandler = (removedDriver) => {
    setFavorites((prevFavoriteDrivers) => {
      const newFavoriteDrivers = prevFavoriteDrivers.filter((driver) => driver !== removedDriver);
      localStorage.setItem('favorites', JSON.stringify(newFavoriteDrivers));
      return newFavoriteDrivers;
    });
  }

  return (
    <>
      <Title title='Favorites'/>
      {!favorites.length && <CenteredContent>Your favorites list is empty.</CenteredContent>}
      <GridLayout>
        <FavoritesHeader/>
        {favorites.map((favorite) => <FavoriteDriver key={favorite} driver={favorite} onRemove={removeClickHandler}/>)}
      </GridLayout>
    </>
  )
}

export default Favorites;
