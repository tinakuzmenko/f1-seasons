import MenuOpen from './MenuOpen/MenuOpen';
import MenuClose from './MenuClose/MenuClose';

const MenuIcon = ({active}) => !active ? <MenuOpen/> : <MenuClose/>;

export default MenuIcon;
