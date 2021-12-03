import {IconButtonWrapper} from './styles';
import FavoritesIcon from './FavoritesIcon/FavoritesIcon';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import MenuIcon from './MenuIcon/MenuIcon';

const IconButton = (props) => {
  return (
    <IconButtonWrapper
      title={props.title}
      onClick={props.onClick}
      type={props.type}
    >
      {props.type === 'favorites' && <FavoritesIcon/>}
      {props.type === 'favoritesActive' && <FavoritesIcon/>}
      {props.type === 'remove' && <RemoveIcon/>}
      {props.type === 'menu' && <MenuIcon active={props.active}/>}
    </IconButtonWrapper>
  );
}

export default IconButton;
