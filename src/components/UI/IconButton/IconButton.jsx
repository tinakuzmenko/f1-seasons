import {IconButtonWrapper} from './styles';
import FavoritesIcon from './FavoritesButton/FavoritesIcon';
import RemoveIcon from './RemoveIcon/RemoveIcon';

const IconButton = (props) => {
  return (
    <IconButtonWrapper
      title={props.title}
      onClick={props.onClick}
      active={props.active}
      type={props.type}
    >
      {props.type === 'favorites' && <FavoritesIcon/>}
      {props.type === 'remove' && <RemoveIcon/>}
    </IconButtonWrapper>
  );
}

export default IconButton;
