import {NavLink} from 'react-router-dom';
import {NavInnerWrapper, NavList, NavLogo, NavWrapper} from './styles';
import img from '../../images/f1-seasons-logo.svg';
import Container from '../UI/Container/Container';

const Nav = () => {
  return (
    <NavWrapper>
      <Container>
        <NavInnerWrapper>
          <NavLogo src={img} width='70'></NavLogo>
          <NavList>
            <li>
              <NavLink to="/">Seasons</NavLink>
            </li>
            <li>
              <NavLink to="drivers">Drivers</NavLink>
            </li>
            <li>
              <NavLink to="teams">Teams</NavLink>
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
