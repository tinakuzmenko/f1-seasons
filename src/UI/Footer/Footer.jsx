import {FooterCopyright, FooterInnerWrapper, FooterLogo, FooterWrapper} from './styles';
import img from '../../images/f1-seasons-logo.svg';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInnerWrapper>
          <FooterLogo src={img} width='70'></FooterLogo>
          <FooterCopyright>
            &copy; Created by Tina Kuzmenko, 2021.
          </FooterCopyright>
        </FooterInnerWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
