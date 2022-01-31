import FavoritesIcon from './FavoritesIcon/FavoritesIcon';
import MenuClose from './MenuClose/MenuClose';
import MenuOpen from './MenuOpen/MenuOpen';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import { IconButtonWrapper } from './styles';

const IconButton = ({ type, active, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'favorites':
        return <FavoritesIcon active={active} />;
      case 'remove':
        return <RemoveIcon />;
      case 'menu':
        return !active ? <MenuOpen /> : <MenuClose />;
      default:
        return;
    }
  };

  return <IconButtonWrapper onClick={onClick}>{getIcon()}</IconButtonWrapper>;
};

export default IconButton;
