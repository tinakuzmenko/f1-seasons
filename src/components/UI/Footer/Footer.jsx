import {FooterCopyright, FooterInnerWrapper, FooterSocial, FooterWrapper} from './styles';
import logo from '../../../images/f1-seasons-logo.svg';
import github from '../../../images/github.svg';
import linkedin from '../../../images/linkedin.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInnerWrapper>
          <Logo src={logo} size='70'/>
          <FooterCopyright>
            <p>&copy; Design & code by Tina Kuzmenko, 2021.</p>
          </FooterCopyright>
          <FooterSocial>
            <a href="https://github.com/tinakuzmenko/" target="_blank">
              <img src={github} alt="GitHub link" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/tina-kuzmenko/" target="_blank">
              <img src={linkedin} alt="LinkedIn link" width={30} height={30}/>
            </a>
          </FooterSocial>
        </FooterInnerWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
