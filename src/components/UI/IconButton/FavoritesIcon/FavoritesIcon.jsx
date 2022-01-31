import {FavoritesIconWrapper} from './styles';

const FavoritesIcon = ({active, width = 16, height = 16}) => {
  return (
    <FavoritesIconWrapper
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      active={active}
      width={width}
      height={height}
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </FavoritesIconWrapper>
  );
}

export default FavoritesIcon;
