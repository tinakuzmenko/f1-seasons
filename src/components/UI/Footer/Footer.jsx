import {FooterCopyright, FooterInnerWrapper, FooterWrapper} from './styles';
import img from '../../../images/f1-seasons-logo.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInnerWrapper>
          <Logo src={img} size='70'/>
          <FooterCopyright>
            &copy; Design & code by Tina Kuzmenko, 2021.
          </FooterCopyright>
        </FooterInnerWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
