import FavoriteDriver from '../FavoriteDriver/FavoriteDriver';
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';

const FavoritesList = ({ favorites, onRemove }) => (
  <>
    <FavoritesHeader />
    {favorites.map(favorite => (
      <FavoriteDriver key={favorite} driver={favorite} onRemove={onRemove} />
    ))}
  </>
);

export default FavoritesList;
