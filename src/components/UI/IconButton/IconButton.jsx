import {IconButtonWrapper} from './styles';
import FavoritesIcon from './FavoritesIcon/FavoritesIcon';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import MenuOpen from './MenuOpen/MenuOpen';
import MenuClose from './MenuClose/MenuClose';

const IconButton = ({type, active, onClick}) => {
  const getIcon = () => {
    switch (type) {
      case 'favorites':
        return <FavoritesIcon active={active}/>;
      case 'remove':
        return <RemoveIcon/>;
      case 'menu':
        return !active ? <MenuOpen/> : <MenuClose/>;
    }
  };

  return <IconButtonWrapper onClick={onClick}>{getIcon()}</IconButtonWrapper>;
}

export default IconButton;
