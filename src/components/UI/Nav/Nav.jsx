import {NavLink} from 'react-router-dom';
import {NavInnerWrapper, NavList, NavWrapper} from './styles';
import img from '../../../images/f1-seasons-logo.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <NavWrapper>
      <Container>
        <NavInnerWrapper>
          <Logo src={img} size='70'/>
          <NavList>
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
