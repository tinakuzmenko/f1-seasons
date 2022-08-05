import { FC } from 'react';

import FavoriteDriver from '../FavoriteDriver/FavoriteDriver';
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader';

interface FavoritesListProps {
  favorites: string[];
  onRemove: (id: string) => void;
}

const FavoritesList: FC<FavoritesListProps> = ({ favorites, onRemove }) => (
  <>
    <FavoritesHeader />
    {favorites.map(favorite => (
      <FavoriteDriver key={favorite} driver={favorite} onRemove={onRemove} />
    ))}
  </>
);

export default FavoritesList;
