import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {NavInnerWrapper, NavList, NavTopBar, NavWrapper} from './styles';
import img from '../../../images/f1-seasons-logo.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import IconButton from '../IconButton/IconButton';

const Nav = () => {
  const [active, setActive] = useState(false);

  const menuClickHandler = () => {
    setActive((prevActive) => !prevActive);
  }

  return (
    <NavWrapper>
      <Container>
        <NavInnerWrapper>
          <NavTopBar>
            <Link to="/">
              <Logo src={img} width='70' height='30'/>
            </Link>
            <IconButton type={'menu'} active={active} onClick={menuClickHandler}/>
          </NavTopBar>
          <NavList active={active}>
            <li>
              <NavLink to="/">Seasons</NavLink>
            </li>
            <li>
              <NavLink to="favorites">Favorites</NavLink>
            </li>
          </NavList>
        </NavInnerWrapper>
      </Container>
    </NavWrapper>
  )
}

export default Nav;
