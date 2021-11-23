import Container from '../Container/Container';
import img from '../../images/f1-seasons-logo.svg';
import {NavInnerWrapper, NavList, NavLogo, NavWrapper} from './styles';

const Nav = () => {
  return (
    <NavWrapper>
      <Container>
        <NavInnerWrapper>
          <NavLogo src={img} width='70'></NavLogo>
          <NavList>
            <li><a href="">Favorites</a></li>
            <li><a href="">Drivers</a></li>
            <li><a href="">Teams</a></li>
          </NavList>
        </NavInnerWrapper>
      </Container>
    </NavWrapper>
  )
}

export default Nav;
