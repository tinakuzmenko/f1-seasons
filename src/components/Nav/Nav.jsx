import {Link} from 'react-router-dom';
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
              <Link to="/">Seasons</Link>
            </li>
            <li>
              <Link to="drivers">Drivers</Link>
            </li>
            <li>
              <Link to="teams">Teams</Link>
            </li>
            <li>
              <Link to="favorites">Favorites</Link>
            </li>
          </NavList>
        </NavInnerWrapper>
      </Container>
    </NavWrapper>
  )
}

export default Nav;
