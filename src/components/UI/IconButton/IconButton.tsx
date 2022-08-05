import { FC, MouseEventHandler } from 'react';

import FavoritesIcon from './FavoritesIcon/FavoritesIcon';
import MenuClose from './MenuClose/MenuClose';
import MenuOpen from './MenuOpen/MenuOpen';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import { IconButtonWrapper } from './styles';

/**
 * A helper to get right SVG icon component
 * @param type
 * @param active
 */
const getIcon = (type: string, active: boolean) => {
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

interface IconButtonInterface {
  type: string;
  active: boolean;
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: FC<IconButtonInterface> = ({ type, active, onClick }) => (
  <IconButtonWrapper onClick={onClick}>
    {getIcon(type, active)}
  </IconButtonWrapper>
);

export default IconButton;
