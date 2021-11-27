import Container from '../UI/Container/Container';
import img from '../../images/f1-seasons-logo.svg';
import {NavInnerWrapper, NavList, NavLogo, NavWrapper} from './styles';
import NavItem from './NavItem';

const Nav = (props) => {
  const items = ['Seasons', 'Drivers', 'Teams', 'Favorites'];

  return (
    <NavWrapper>
      <Container>
        <NavInnerWrapper>
          <NavLogo src={img} width='70'></NavLogo>
          <NavList>
            {items.map((item) => <NavItem name={item}/>)}
          </NavList>
        </NavInnerWrapper>
      </Container>
    </NavWrapper>
  )
}

export default Nav;
