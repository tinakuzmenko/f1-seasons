import Title from '../UI/Title/Title';
import {useEffect, useState} from 'react';
import GridLayout from '../UI/Grid/GridLayout/GridLayout';
import GridRow from '../UI/Grid/GridRow/GridRow';

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
        {favorites.map((favorite) => <GridRow>{favorite}</GridRow>)}
      </GridLayout>
    </>
  )
}

export default Favorites;
