import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';
import FavoriteDriver from '../FavoriteDriver/FavoriteDriver';

const FavoritesList = ({favorites, onRemove}) => {
  return (
    <>
      <FavoritesHeader/>
      {favorites.map((favorite) => <FavoriteDriver key={favorite} driver={favorite} onRemove={onRemove}/>)}
    </>
  )
}

export default FavoritesList;
