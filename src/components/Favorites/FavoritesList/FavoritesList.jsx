import GridLayout from '../../UI/Grid/GridLayout/GridLayout';
import FavoriteDriver from '../FavoriteDriver/FavoriteDriver';
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';

const FavoritesList = ({favorites, onRemove}) => {
  return (
    <GridLayout>
      <FavoritesHeader/>
      {favorites.map((favorite) => <FavoriteDriver key={favorite} driver={favorite} onRemove={onRemove}/>)}
    </GridLayout>
  )
}

export default FavoritesList;
