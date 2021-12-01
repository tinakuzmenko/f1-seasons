import Title from '../UI/Title/Title';
import {useEffect, useState} from 'react';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import FavoriteDriver from './FavoriteDriver/FavoriteDriver';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (!storedFavorites) return;

    setFavorites(storedFavorites);
  }, [])

  return (
    <>
      <Title title='Favorites'/>
      {!favorites.length && <p>Your favorites list is empty.</p>}
      <GridLayout>
        {favorites.map((favorite) => <FavoriteDriver key={favorite} driver={favorite}/>)}
      </GridLayout>
    </>
  )
}

export default Favorites;
